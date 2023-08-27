import { PaginationResult } from "../../../common/models/paginationResult";
import { cod4DB } from "../db/cod4DB";
import { Cod4Player } from "../models/cod4Player";

export async function getAllPlayers(offset: number,
  limit: number) {
  const players = await cod4DB
    .selectFrom("playerInformation")
    .selectAll()
    .orderBy("playerInformation.playerID")
    .limit(limit)
    .offset(offset)
    .execute();

  const count = await cod4DB
    .selectFrom("playerInformation")
    .select((eb) => [eb.fn.countAll<number>().as("total")])
    .executeTakeFirstOrThrow();

  const cod4Players = players.map((player) => new Cod4Player(player));
  const pagination = new PaginationResult(cod4Players, offset, limit, count.total)

  return pagination;
}

export async function getPlayerById(playerId: number) {
  const player = await cod4DB
    .selectFrom("playerInformation")
    .selectAll()
    .where("playerID", "=", playerId)
    .executeTakeFirst();

  if (!player) {
    return null;
  }

  const cod4Player = new Cod4Player(player);

  return cod4Player;
}

export async function searchPlayersByName(
  offset: number,
  limit: number,
  playerName: string
) {
  const upperPlayerName = playerName.toUpperCase();

  const players = await cod4DB
    .selectFrom("playerInformation")
    .selectAll()
    .where(({ eb, fn }) =>
      eb(fn("UPPER", ["playerName"]), "like", `%${upperPlayerName}%`)
    )
    .orderBy("playerName")
    .limit(limit)
    .offset(offset)
    .execute();

  const count = await cod4DB
    .selectFrom("playerInformation")
    .select((eb) => [eb.fn.countAll<number>().as("total")])
    .where(({ eb, fn }) =>
      eb(fn("UPPER", ["playerName"]), "like", `%${upperPlayerName}%`)
    )
    .executeTakeFirstOrThrow();

  const cod4Players = players.map((player) => new Cod4Player(player));
  const pagination = new PaginationResult(
    cod4Players,
    offset,
    limit,
    count.total
  );

  return pagination;
}
