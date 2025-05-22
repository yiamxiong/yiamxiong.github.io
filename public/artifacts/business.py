from dataclasses import dataclass

@dataclass
class Fish:
    type: str
    length: float
    weight: float
    id: int = 0
    
class FishingLog:
    def __init__(self):
        self.__list = []
        
    @property
    def count(self):
        return len(self.__list)
    
    def add(self, fish):
        self.__list.append(fish)
    
    def remove(self, number):
        return self.__list.pop(number -1)
    
    def __iter__(self):
        for fish in self.__list:
            yield fish