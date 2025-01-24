def find_volume(length=1, width=1, depth=1):
  return length * width * depth, width, 'hola'

result, width, text = find_volume(width=10)

result = find_volume(10, 20, 3)

print(result)
print(width)
print(text)