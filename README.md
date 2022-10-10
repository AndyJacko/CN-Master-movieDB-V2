# Test Data

# Add Movie (upto 3)

// node src/app --action add --movie1 "1, A New Hope, Mark Hammil, George Lucas, 1977" --movie2 "2, The Empire Strikes Back, Harrison Ford, Irvin Kershner, 1980" --movie3 "3, Return Of The Jedi, Carrie Fisher, Richard Marquand, 1983"

// node src/app --action add --movie1 "1, Ted, Mark Whalberg, , 2012" --movie2 "2, Venom, Tom Hardy, , 2018" --movie3 "3, A Clockwork Orange, , Stanley Kubrick, 1972"

// node src/app --action add --movie1 "1, 12 Angry Men, Henry Fonda, Sidney Lumet, 1957" --movie2 "2, Alan Partridge: Alpha Papa, Steve Coogan, ," --movie3 "3, American Psycho, Christian Bale, , 2000"

// node src/app --action add --movie1 "1, Bugsy Malone, Jodie Foster, Alan Parker, 1976" --movie2 "2, Friday, Ice Cube, , 1995"

// node src/app --action add --movie1 "1, Watership Down, , , 1978"

# Modify Movie By ID

// node src/app --action modify --id 1 --movie "The Omen 2, William Holden, Don Taylor, 1978"

// node src/app --action modify --id 666 --movie "The Omen 2, William Holden, Don Taylor, 1978"

# Delete Movie By ID

// node src/app --action delete --id 1

// node src/app --action delete --id 333

# View Movie By ID (upto 3)

// node src/app --action view --id1 1

// node src/app --action view --id1 666

// node src/app --action view --id1 666 --id2 999

// node src/app --action view --id1 333 --id2 666 --id3 999

# View All Movies

// node src/app --action viewall
