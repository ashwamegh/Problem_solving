#Flipping Bits

#Input For Size
T = int(raw_input())
bits = list()
binary = list()
convertedBit= list()

#Input for Integers
for i in range(0,T):
    n = raw_input()
    bits.append(int(n))


for i in range(0,T):
    ui = bin(bits[i])
    length = ui.length()
    for j in range(0, length):
        

print binary
    
    
 
