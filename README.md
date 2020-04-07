# Elminster

## A RPG Helper Bot

I am here to help you play, not to show off!

Just type !elminster (or !e for shorts) and a dice roll and I will tell you the result.

It ain't much, but it's honest work.

### Rolling Dice
The dice library used is [this one](http://rpg.greenimp.co.uk/dice-roller/). Here are some examples:

* d6 or 1d6 (A 6 sided die)
* 2d6 (Two 6 sided dice)
* 1d6+4 (Roll a 6 sided dice and add 4 to the result)
* 2d10*4+1d20 (Roll two 10 sided dice multiply by four, and roll one 20 sided die)
* 2d10+4+2d20dl1 (Roll two 10 sided dice add four, and roll two 20 sided die, taking away the lowest of the two)
* (2d10+4)*2 (Parenthesis to specify order of operations)
* d% (A percentile die - equivalent to d100)
* dF or dF.2 (A standard fudge dice - 2 thirds of each symbol)
* dF.1 (A non-standard fudge dice - 1 positive, 1 negative, 4 blank)
* 2d6! (Exploding dice - two 6 sided die, rolling again for each roll of the maximum value)
* 2d6!! (Exploding & compounding dice - like exploding, but adding together into single roll)
* 2d6!p (Penetrating dice - like exploding, but subtract 1 from each consecutive roll)
* 2d6!!p (Penetrating & compounding dice - like exploding & compounding, but subtract 1 from each consecutive roll)
* 2d6!>=4 (Exploding dice, but only if you roll a 4 or greater - Also usable with compounding and penetrating dice)
* 2d6>4f<=3 (Dice pool - anything greater than a 4 is a success, less than or equal to 3 is a fail. Count the number of successes, minus failures, as the total)
* floor(2d6/3), round(2d6/3), ceil(2d6/3) (Rounding functions)
* The following arithmetic operators can be used: +, -, *, /, ^, %
* The following comparative operators can be used for compare points: =, <, >, <=, >=, !=
