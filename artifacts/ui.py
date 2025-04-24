import db
from business import Fish, FishingLog

def add_fish(log):
    fish_type = input("What kind of fish: ").title()
    length = get_fish_length()
    weight = get_fish_weight()
    
    fish = Fish(fish_type, length, weight)
    log.add(fish)
    db.add_fish(fish)
    
    print(f"{fish_type} ({fish.length} inches, {fish.weight} lbs) was added. \n")
    
def get_fish_length():
    while True:
            length = float(input("What is the length of the fish in inches?: "))
            if length > 0:
                return length
                break
            elif length <= 0:
                print("Length must be greater than 0.")
            else:
                print("Please enter a number.")
                   
    
        
def get_fish_weight():
    while True:
            weight = float(input("What is the weight of the fish in lbs?: "))
            if weight > 0:
                return weight
                break
            elif weight <= 0:
                print("Weight must be greater than 0.")
            else:
                print("Please enter a number.")
                
    
        
def delete_fish(log):
    print("These are the logged fish: ")
    print(display_log(log))
    number = get_fish_number(log, "Which fish number: ")
    fish = log.remove(number)
    db.delete_fish(fish)
    print(f"{fish.type} was deleted.\n")
    
def display_log(log):
    if log.count == 0:
        print("No fish logged.")
    else:
        print(f"{'':3}{'Fish Type'}  {'Length(in)'}  {'Weight(lbs)'}")
        print("-" * 40)
        total_length = 0
        total_weight = 0
        for i, fish in enumerate(log, start=1):
            print(f"{i:}.   {fish.type}     {fish.length:.2f}       {fish.weight:.2f}")
            total_length += fish.length
            total_weight += fish.weight
        print("-" * 40)
        print(f"{'Average Length:'} {total_length / log.count:.2f} in")
        print(f"{'Average Weight:'} {total_weight / log.count:.2f} lbs")
    print()
    
def get_fish_number(log, prompt):
    while True:
        try:
            number = int(input(prompt))
            if number >= 1 and number <= log.count:
                return number
            else:
                print(f"Invalid number. Please choose between 1 and {log.count}.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def display_menu():
    print("MENU OPTIONS")
    print("1 - Display Fishing Log")
    print("2 - Add a Fish")
    print("3 - Remove a Fish")
    print("4 - Exit Program")
    print()

def main():
    db.connect()
    log = db.get_fish()
    if log == None:
        log = FishingLog()

    while True:
        display_menu()
        choice = input("Enter menu option: ")
        print()
        if choice == "1":
            display_log(log)
        elif choice == "2":
            add_fish(log)
        elif choice == "3":
            delete_fish(log)
        elif choice == "4":
            db.close()
            print("Goodbye!")
            break
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    main()
            
