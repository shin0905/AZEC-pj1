import statistics
# カンマ区切りの複数の文字列が入ったテキストファイルがあります　この数値の真ん中の値をもとめるプログラムをつくりその値をprintしてください
# Function to read numbers from a file and calculate the median
def calculate_median(file_path):
    with open(file_path, 'r') as file:
        # Read the file content and split by comma to get a list of strings
        numbers_str = file.read().strip().split(',')
        # Convert the list of strings to a list of integers
        numbers = [int(num) for num in numbers_str]
        # Calculate the median of the list of numbers
        median_value = statistics.median(numbers)
        # Print the median value
        print(f"The median value is: {median_value}")

# Main function
def main():
    # Path to the input file
    file_path = "c:/file"
    # Calculate and print the median value
    calculate_median(file_path)

# Entry point of the script
if __name__ == "__main__":
    main()