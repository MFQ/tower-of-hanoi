# Recursive Python function to solve tower of hanoi
import copy

from common.constant import towers
from common.utils import Util


class Algorithm:
    def __init__(self, number_of_pegs):
        self.number_of_pegs = number_of_pegs
        self.steps = Util.generate_init_step(number_of_pegs)

    def render_step(self, peg, source, des):
        index = len(self.steps) - 1
        previous_state = self.steps[index]
        _source = copy.deepcopy(previous_state[towers[source]])
        _dest = copy.deepcopy(previous_state[towers[des]])
        _dest.insert(0, peg)
        _source.remove(peg)
        new_state = [[], [], []]
        new_state[towers[source]] = _source
        new_state[towers[des]] = _dest
        _remaining = new_state.index([])
        if towers[source] != _remaining:
            new_state[_remaining] = copy.deepcopy(previous_state[_remaining])
        else:
            if _remaining + 1 < 3 and new_state[_remaining + 1] == []:
                new_state[_remaining + 1] = copy.deepcopy(previous_state[_remaining + 1])
            if _remaining + 2 < 3 and new_state[_remaining + 2] == []:
                new_state[_remaining + 2] = copy.deepcopy(previous_state[_remaining + 2])
        self.steps.append(new_state)

    def tower_of_hanoi(self, n, from_rod, to_rod, aux_rod):
        if n == 1:
            print("Move disk 1 from rod", from_rod, "to rod", to_rod)
            self.render_step(n, from_rod, to_rod)
            return
        self.tower_of_hanoi(n - 1, from_rod, aux_rod, to_rod)
        print("Move disk", n, "from rod", from_rod, "to rod", to_rod)
        self.render_step(n, from_rod, to_rod)
        self.tower_of_hanoi(n - 1, aux_rod, to_rod, from_rod)

    def generate_tower_of_hanoi(self):
        self.tower_of_hanoi(self.number_of_pegs, 'A', 'C', 'B')
        return self.steps
