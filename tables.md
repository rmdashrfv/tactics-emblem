# Schema

## User
```
username
partyId (string)
slug
email
password
birthday
bio
rank (enum, some kind of title)
metadata (jsonb)
```

## Unit
```
name
gender
maxhp
maxmp
strength
mainSkill
speed
equipment (jsonb)
level
moveRange
bravery
faith
exp
jp (jsonb)
```

## Discipline (an ability's category)
```
name
abilities (jsonb) // reaction, movement, etc
```

## Abilities
```
name
damage
range
jpCost
mpCost
ctCost
healing (boolean)
unitIds (array of ints)
```

## Jobs
```
name
discipline
speed
moveRange
```

## Equipment
```
name
metadata // type (weapon/armor/shoes/etc), weaponType, twoHand, 
atk
hp
mp
speed
moveRange
job
status (jsonb that determines things like auto-haste, auto-revive, auto-reflect, etc)
```

## Items
// scrape these from the FFT Wiki

