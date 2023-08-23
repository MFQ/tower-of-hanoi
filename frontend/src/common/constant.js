const OriginX = 50;
const OriginY = 50;
const MaxHeight = 400;
const MaxWidth = 600;

const TowerOne = "TowerOne";
const TowerTwo = "TowerTwo";
const TowerThree = "TowerThree";

const TowersPlacement = {
  [TowerOne]: OriginX + 100,
  [TowerTwo]: OriginX + 300,
  [TowerThree]: OriginX + 500

}

const numberRegx = /^\d+$/

export {
  OriginX,
  OriginY,
  MaxHeight,
  MaxWidth,
  TowersPlacement,
  TowerOne,
  TowerTwo,
  TowerThree,
  numberRegx
}