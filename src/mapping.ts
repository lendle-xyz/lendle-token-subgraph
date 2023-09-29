import { Transfer as ERC20Transfer } from "../generated/Token/ERC20";
import { Account, Transfer } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const BIGINT_ZERO = BigInt.fromI32(0);

export function createAccount(accountID: string): Account {
  const account = new Account(accountID);
  account.balance = BIGINT_ZERO;
  account.save();
  return account;
}

export function handleTransfer(event: ERC20Transfer): void {
  const from = event.params.from;
  const to = event.params.to;
  const amount = event.params.value;

  // grab accounts
  let fromAccount = Account.load(from.toHexString());
  if (!fromAccount && from.toHexString() != ZERO_ADDRESS) {
    fromAccount = createAccount(from.toHexString());
  }

  let toAccount = Account.load(to.toHexString());
  if (!toAccount && to.toHexString() != ZERO_ADDRESS) {
    toAccount = createAccount(to.toHexString());
  }

  if (fromAccount) {
    fromAccount.balance = fromAccount.balance.minus(amount);
    fromAccount.save();
  }

  if (toAccount) {
    toAccount.balance = toAccount.balance.plus(amount);
    toAccount.save();
  }

  const id = `${event.transaction.hash.toHexString()}-${event.logIndex.toString()}`;
  const transfer = new Transfer(id);
  transfer.nonce = event.transaction.nonce;
  transfer.blockNumber = event.block.number;
  transfer.timestamp = event.block.timestamp;
  transfer.hash = event.transaction.hash.toHexString();
  transfer.logIndex = event.logIndex.toI32();
  transfer.from = fromAccount ? fromAccount.id : ZERO_ADDRESS;
  transfer.to = toAccount ? toAccount.id : ZERO_ADDRESS;
  transfer.amount = amount;
  transfer.save();
}
