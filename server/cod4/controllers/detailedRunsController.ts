import { PaginationResult } from "../../../common/models/paginationResult";
import { cod4DB } from "../db/cod4DB";
import { Cod4DetailedRun } from "../models/cod4DetailedRun";

export async function getAllDetailedRunsByPlayerId(
  offset: number,
  limit: number,
  filters: {
    playerId?: number;
    mapId?: number;
  }
) {
  let query = cod4DB
    .selectFrom("playerRuns")
    .innerJoin(
      "playerInformation",
      "playerInformation.playerID",
      "playerRuns.playerID"
    )
    .innerJoin("mapids", "mapids.mapID", "playerRuns.mapID")
    .select([
      "playerInformation.adminLevel",
      "playerInformation.playerID",
      "playerInformation.playerName",
      "mapids.mapname",
      "mapids.mapID",
      "playerRuns.explosiveLaunches",
      "playerRuns.finishTimeStamp",
      "playerRuns.lastUsedTimeStamp",
      "playerRuns.startTimeStamp",
      "playerRuns.loadCount",
      "playerRuns.runID",
      "playerRuns.saveCount",
      "playerRuns.timePlayed",
    ])
    .orderBy("playerRuns.runID", "desc")
    .limit(limit)
    .offset(offset);

  let countQuery = cod4DB
    .selectFrom("playerRuns")
    .innerJoin(
      "playerInformation",
      "playerInformation.playerID",
      "playerRuns.playerID"
    )
    .innerJoin("mapids", "mapids.mapID", "playerRuns.mapID")
    .select((eb) => [eb.fn.countAll<number>().as("total")]);

  if (filters.playerId) {
    query = query.where("playerRuns.playerID", "=", filters.playerId);
    countQuery = countQuery.where("playerRuns.playerID", "=", filters.playerId);
  }
  if (filters.mapId) {
    query = query.where("playerRuns.mapID", "=", filters.mapId);
    countQuery = countQuery.where("playerRuns.mapID", "=", filters.mapId);
  }

  const detailedRuns = await query.execute();
  const count = await countQuery.executeTakeFirstOrThrow();

  const cod4DetailedRuns = detailedRuns.map((run) => new Cod4DetailedRun(run));
  const pagination = new PaginationResult(
    cod4DetailedRuns,
    offset,
    limit,
    count.total
  );

  return pagination;
}
