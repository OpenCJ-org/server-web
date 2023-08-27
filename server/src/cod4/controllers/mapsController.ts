import { PaginationResult } from "src/common/models/paginationResult";
import { cod4DB } from "../db/cod4DB";
import { Cod4Map } from "../models/cod4Map";

export async function getAllMaps(offset: number, limit: number) {
  const maps = await cod4DB
    .selectFrom("mapids")
    .selectAll()
    .orderBy("mapname")
    .limit(limit)
    .offset(offset)
    .execute();

  const count = await cod4DB
    .selectFrom("mapids")
    .select((eb) => [eb.fn.countAll<number>().as("total")])
    .executeTakeFirstOrThrow();

  const cod4Maps = maps.map((map) => new Cod4Map(map));
  const pagination = new PaginationResult(cod4Maps, offset, limit, count.total);

  return pagination;
}

export async function getMapByName(mapId: number) {
  const map = await cod4DB
    .selectFrom("mapids")
    .selectAll()
    .where("mapID", "=", mapId)
    .executeTakeFirst();

  if (!map) {
    return;
  }

  return new Cod4Map(map);
}

export async function searchMapByName(
  mapName: string,
  offset: number,
  limit: number
) {
  const upperMapName = mapName.toUpperCase();
  const maps = await cod4DB
    .selectFrom("mapids")
    .selectAll()
    .where(({ eb, fn }) =>
      eb(fn("upper", ["mapname"]), "like", `%${upperMapName}%`)
    )
    .orderBy("mapids.mapname")
    .limit(limit)
    .offset(offset)
    .execute();

  const count = await cod4DB
    .selectFrom("mapids")
    .select((eb) => [eb.fn.countAll<number>().as("total")])
    .where(({ eb, fn }) =>
      eb(fn("upper", ["mapname"]), "like", `%${upperMapName}%`)
    )
    .executeTakeFirstOrThrow();

  const cod4Maps = maps.map((map) => new Cod4Map(map));
  const pagination = new PaginationResult(cod4Maps, offset, limit, count.total);

  return pagination;
}
