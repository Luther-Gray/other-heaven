+++
title = "Learning to Respect Roblox"
date = 2025-04-03
[taxonomies]
tags = ["Video Games", "Game Design"]
+++

# Hey Hey Hey!👋🏿
I spent a little bit of yesterday redesigning my hair and hat when some over-designed V-Tuber that wore over 23 different accessory pieces told me that I gotta lock the fuck in. So I said fine.

![Blockbench Flashbang](/blogImages/Overdesigned.png "Blockbench Concept Work")

Something I forgot the pain of was dreadlocks. There's room to do something really cool there, but each strand is the temptation of just clapping your hands and saying it's all good. I'll explain the hat at another time when I start yapping about the game I'm working on in secret.

One of many.

The best thing about this base mesh that I finally got nailed down is that he's way easier to pose and work with than my previous attempts. The character that's on Other Heaven's landing page doesn't even have legs y'know?

Or rather, he does, but they are literally just sticks so they may as well not exist.

I don't feel happy or professional enough to straight up give you the baseMesh, but here's the turn around for you to trace over if you want. I have you a black outline to help its shape stand out when you turn the opacity down. (That's something I struggled with a lot.)

![Male Turn Around](/blogImages/maleTurnaround.jpg "Male Turnaround")

*If you actually do want to use the model itself, just contact me and I'll make it public for anyone to use. I'm not a character modeler so my confidence in it is really low lol*

He even has fingers!

![He Has Fingers!](/blogImages/heHasFingers.jpg "Male Model Examining New Fingers")

For the face, I highly suggest you use 2D Textures on a plane for the eyes, then again for the mouth. It will help you make expressions and such later on with a facial rig. Even if you're not animating, if you want to take screenshots and pose, it's a pain in the ass to disable the happyEyes layer and enable the sadEyes layer over and over.

Here's a couple of vids on how that happens in both Blender and Blockbench. Basically you're going to keyframe UV positions to switch between expressions. I really ought to write that stuff down eventually so when the heat death of the internet comes and all the data rots, I'll still have these videos in a different form.

[BLOCKBENCH - From the Fantastical, MisterGriimm!](https://youtu.be/MmMJuuX5Ago)

[BLENDER - From MY BOY WIZ!](https://youtu.be/VZYm4mg1Eyo)

Anyways, enjoy or whatever.

# Novice

A friend of mine came to me recently telling me that he wanted to make video games and I tried to narrow down exactly what he wanted to do in game development. The answer was inconclusive.

Coincidentally, at the time, RPGMaker VXAce was FREE on steam. I 100% endorse RPG Maker as an gateway drug into the hellish life of game development.

For those of you who aren't too familiar, RPG Maker is like Scratch but for Video Games. It gives you a bunch of pre-made tooling, everything you need to make a game from beginning to end, and then you can click and drag everything you need from there.

I refer to RPG Maker as the engine that you don't need a keyboard to use. It's that simple.

Even though the name is RPG Maker, you can twist that engine to make many different things, from FPS Dungeon Crawls, to Action-Heavy Zelda Likes. The real limitation is 3D, but you can fake it.

Those out of bounds ambitions are going to be what wil start to bug you. RPG Maker is great at what it does, but when you try to leave the sandbox it made, you're going to crawl through glass. So much so that if the time you spent trying to bend RPG Maker to your whims was used to follow a Godot tutorial, the RPG Maker method would've taken you 3x as long.

I feel confident enough in saying that to put money down on it. If you want to make a dungeon crawler, you CAN do it with RPG Maker, but I'm begging you to use Godot instead. You'll save yourself SO much headache.

# First Test

I gave my friend a simple test. A list of objectives to complete to get a feel for what he liked and what he didn't.

1. Create a Chest with a Potion in it.
2. Make the potion kill you when you drink it.
3. Change a Dialog Box.
4. Make a house and go into that house.

These seemed like reasonable goals in my head. Each one escalating in difficulty. It touches on everything except for UI Design, but one could argue that learning UI is like learning Graphic Design. For the sake of making games, this usually isn't what people think of. It's incredibly important, but it's not the fantasy.

Well, he got to the Dialog Box before bringing up to me that the game he wanted to make was an FPS Squad Shooter, not an RPG.

If I was a shittier friend, maybe I would've said "You need to spend 8000 hours grinding pong game design before you can make your dream game" but I'm not an idiot. What gets a game done is less skill and more enthusiasm. Even after you spend time grinding out the fundamentals, it can make the road to your dream game smoother, but in the end you still wasted time making shit that you didn't want to make.

Your enthusiasm is lesser and as a result, when you finally DO sit down for your dream game, you are 20 years late.

Fuck that.

If you have an open-world survival mmorpg that mixes every single genre under the sun as your dream game, chase it! Don't let anyone tell you otherwise! Fly close to the sun and feel how it singes your skin! Fuck these guys out here telling you to take it slow! 80 Years on this planet and 20 are already gone! Get your ass in there!

So I knocked the idea around. Regardless of if this was true passion or just the fantasy of Game Development that a lot of players get in their head, I wanted to cater to that. I had time to kill and this was my friend so I thought it over.

Then I came to a startling realization. Didn't I already have a platform, one that I grew up playing on, that could help him make his game in a realistic amount of time? Without learning server-client deliniation or a dab of scripting? One that had a co-op development enviroment so that I could work along-side him in real time?

# Sorry Roblox, I didn't respect your game!

I was a fool! This "Children's Platform" nonsense has to fucking END! Roblox Studio is a straight up, real deal, big dick, no frills, LUA ENGINE.

It didn't take me long to realize that after we got in. Brother you will not believe the horrors I've had to deal with fighting against Roblox.

Like RPG Maker, Roblox technically gives you a bunch of pieces in the sandbox to play with, but while RPG Maker told you to play with the toys in the sandbox, Roblox flies you out to the Sahara Desert in a rickety-dull gray military plane, kicks you out the hangar door with a parachute and a bag of sandbox toys.

I did NOT know they were playin like this. I used to clown this platform for the same reason people clowned Melee, Minecraft, or Video Games in general! "Isn't that for kids?" I WAS A FOOL! FORGIVE ME!

Like, everything from UI to Physics is in this engine and need to be aknowledged at least a bit to make ANY game. This is the engine for Junior Developers and if I used Roblox Studio before I learned Unreal Engine in college, I would've had a FAR easier time.

All I remember doing in 2008 was playing those obby courses. I stopped playing when I was 15 or something I think. Since then, Roblox has changed like CRAZY. You can even change out the view models with realistic Blender sculpts!

Anyways, I plopped my friend in, dusted off my old account, and now we're putting together his squad shooter fps game that has now morphed into a sci-fi extraction shooter with demons. It's fun to see how he thinks through problems and digs up solutions using the experience he had playing other games. I'm still here to keep the wheels on the bike and make sure the game loop doesn't expand before it's solid, but for the most part, I'm letting him run wild.

I want the scope to creep up past this marker that I set,  and while I enforce that we develop within the scope, the longer he looks at all that shit he has left to do.

Ambition is the first nail I want to hammer into his hands.

The second nail is time spent doing shit that doesn't contribute to the gameplay, but is critical for anything else to work.

I also taught him to use PenPot, a Figma alternative, to start designing the UI.

Might even drag a few more friends into the fold to make him take charge as the team lead and point at a direction that he doesn't know how to navigate.

All of these parts are growth points, and the pain of burning in the sun's rays and letting the glue of your wings melt are important when it comes to forging a stronger will and ambition.

Cowards who spend 20 years making games they wouldn't ever play don't learn this until it's too late.

Roblox is the perfect enviroment to explore all of these pain points, because I can literally script through any problem when he struggles. Of course, there's gotta be times when I lie and say "Yeah idk how to do that lol" so he can navigate the lack of expertise, but the entire exercise we're going through here is really enjoyable.

I might just like teaching idk.

Anyways, I'm gonna fix the momentum issues in our playerController script because Roblox doesn't have Acceleration. They instantly snap from 0 to max speed, which doesn't feel good in first person.

Deuces~ | Luther✌🏿