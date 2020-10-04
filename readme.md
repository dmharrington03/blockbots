# BlockBot
### *A high-level visual programming framework for robotics*

## Problem
Blockbots aims to help educate people about programming through interaction with the real world. The gap between play-along tutorials/Scratch and abstract command-line based programs can be daunting, and many people do not know what programming actually does - escaping the trope of a hacker between a black and green terminal can be difficult. Thus, Blockbots not only seeks to help educate people about programming, but close the distance between perception and reality of programming in the eyes of the general public.

## Solution
The main way Blockbots approaches this is through a visual programming interface 


## Features

- Levels of complexity
  - details of higher level vs. lower level (e.g. "Move forward" vs. "Send instruction linear move with spec x)
  - eventually move to JS
- Window
  - configure robot
  - save
  - load
  - canvas
  - run button
  - move lower button
- Saving local programs
- configuring custom robots

## Technologies
- Blockly
  - Make a new configuration
- UIKit
- Vue? If I need it

## Layout
- Navbar
  - Home
  - New project
  - read docs
- Left panel (working space)
  - Switch levels
  - New configuration
  - Connect
- Main
  - Blockly canvas
  - Code view (if selected) with libraries 
    - editable??
- Right (working space)
  - Run/add to queue

- Homepage
  - New project
  - read tutorial
  - use API