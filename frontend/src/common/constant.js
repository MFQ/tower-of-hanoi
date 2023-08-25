const OriginX = 50;
const OriginY = 50;
const MaxHeight = 400;
const MaxWidth = window.innerWidth / 4; // 600

const TowerOne = "TowerOne";
const TowerTwo = "TowerTwo";
const TowerThree = "TowerThree";

const TowersPlacement = {
  [TowerOne]: OriginX + MaxWidth / 6,
  [TowerTwo]: OriginX + MaxWidth / 2,
  [TowerThree]: OriginX + MaxWidth - (MaxWidth / 6) 

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