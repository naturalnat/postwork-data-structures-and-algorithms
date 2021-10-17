require 'set'

def find_first_duplicate(arr)
  uniques = Set.new

  arr.each do |value|
    return value if uniques.include?(value)

    uniques.add(value)
  end

  -1
end


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

# sets contain only unique values; check value in array and add to set if it doesnt exist in set, otherwise return duplicate. return -1 when no duplicate to return