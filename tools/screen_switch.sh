#!/bin/bash

# read http://wiringpi.com/the-gpio-utility/

# in principal, the mode only has to be set once. However, executing it everytime makes sure it is set correctly
gpio mode 1 out

# trigger the optocoupler
gpio write 1
# wait for the display to respond
sleep 0.05
# turn off the trigger
gpio write 0
