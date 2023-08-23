const generate_pegs = n => 
  Array.from({length: n}, (_, i) => i + 1)

const isValidMove = (peg, tower) => {
  if (tower.length === 0) 
    return true;
  return tower[0] > peg
}

export {
  generate_pegs,
  isValidMove
}