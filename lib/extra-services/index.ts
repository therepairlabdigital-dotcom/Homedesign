import type { ExtraService } from "./types";
import { knockdownRebuild } from "./knockdown-rebuild";
import { grannyFlatsSecondaryDwellings } from "./granny-flats-secondary-dwellings";
import { slopingBlockHomes } from "./sloping-block-homes";
import { houseRaisingBuildUnder } from "./house-raising-build-under";
import { smallLotNarrowBlockHomes } from "./small-lot-narrow-block-homes";
import { acreageHomes } from "./acreage-homes";
import { homeExtensionsSecondStoreyAdditions } from "./home-extensions-second-storey-additions";

export type { ExtraService } from "./types";

/**
 * Data-driven service pages rendered at /services/[slug]/. These sit alongside the
 * hand-built service pages (new-home-builds, custom-builds, ...) which take
 * precedence as static routes. Order here is the order they appear in link lists.
 */
export const extraServices: ExtraService[] = [
  knockdownRebuild,
  grannyFlatsSecondaryDwellings,
  slopingBlockHomes,
  houseRaisingBuildUnder,
  smallLotNarrowBlockHomes,
  acreageHomes,
  homeExtensionsSecondStoreyAdditions,
];

export function getExtraService(slug: string) {
  return extraServices.find((service) => service.slug === slug);
}
