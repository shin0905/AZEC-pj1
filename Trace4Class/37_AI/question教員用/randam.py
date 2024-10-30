import random

# Function to generate random numbers and write to a file
def generate_random_numbers(file_path, count):
    with open(file_path, 'w') as file:
        for _ in range(count):
            # Generate a random number
            rand_num = random.randint(100, 9999999)
            # Write the random number to the file with a newline
            file.write(f"{rand_num},")

# Main function
def main():
    # Path to the output file
    file_path = "c:/file/random_numbers.txt"
    # Number of random numbers to generate
    count = 300000
    # Generate random numbers and write to the file
    generate_random_numbers(file_path, count)

# Entry point of the script
if __name__ == "__main__":
    main()