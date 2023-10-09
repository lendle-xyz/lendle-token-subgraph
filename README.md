## Query
https://subgraph.lendle.xyz/subgraphs/name/lendle-finance/lendle-token-mantle/graphql

## Status
https://subgraph-status.lendle.xyz/graphql/playground?query=%7B%0A%20%20indexingStatusesForSubgraphName(subgraphName%3A%22lendle-finance%2Flendle-token-mantle%22)%0A%20%20%7B%0A%20%20%20%20subgraph%0A%20%20%20%20synced%0A%20%20%20%20health%0A%20%20%20%20fatalError%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20chains%7B%0A%20%20%20%20%20%20latestBlock%7B%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20chainHeadBlock%7B%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20earliestBlock%7B%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20lastHealthyBlock%7B%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20entityCount%0A%20%20%20%20node%0A%20%20%7D%0A%7D
