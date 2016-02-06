---
layout: post
title:  "Gaining Facility with D3js General Update Pattern"
date:   2016-02-5 11:18:25 -0800
---
We enter, we update, we exit (with object constancy).

<div id="alphaPack"></div>

<script src="/assets/js_libs/d3.min.js" charset="utf-8"></script>
<script src="/assets/js_libs/underscore-min.js"></script>
<script src="/assets/custom_js/AlphaPack9.js"></script>

In [Part 2 of this series](http://qyoom.github.io/coen-population-drift-2/) I attempted an alternative visualization of population drift interpreted from Chapter 1 of Enrico Coen's *Cells to Civilizations, The Principles of Change That Shape Life*. I say "attempted" because, although that implementation does a passable job simulating individual agents acting out evolutional principles of selection, competition, and replication in a population, I was unable to coordinate close tracking of each agent from one replication cycle to the next. And for future simulations I want to be able to keep the state coherent (eg. identity, location, and various other traits) without introducing random "jumpiness" not purposeful to the model. 

####Learning to use the tools

[D3js](http://d3js.org/) is the renown Javascript library for creating data visualizations on the Web. Its forte is binding data to the DOM making the job of data manipulation much easier than having to make tons of ad hoc function calls. It is standards compliant and plays nicely with other Javascript libraries. I say "easier", but not necessarily easy right off the bat. Like any complex tool, you have to spend a good amount of time learning  to use it. And I have a lot more learning to do, because it can do some cool and amazingly powerful things. What I have been able to do here is to gain some understanding and control of core concepts of joining data to the DOM (by key) and then updating and removing it, all with transitions that make the dynamic changes easier to follow.

####Lost and found in translation

I started by studying Mike Bostock's three-part [General Update Pattern tutorials](https://bl.ocks.org/mbostock/3808234). (Bostock is the creator of D3). I then worked to translate this pattern from the horizontal linear axis layout in Bostock's tutorials to what is called a "pack" layout which is hierarchical and typically represented as circles nested within other circles. Because of the hierarchical nature, and my basic unfamiliarity with the API, this took quite a bit of trial and error on my part. I was delighted to pull it off in the end as it gives me some confidence that I will be able to have better control over agents in models that have increasing complexity. I plan to go back now and improve the implementation of the last weeks simulation.

####Next: Introducing evoluational reinforcement and bias

To finish the treatment of Coen's four principles of evolution I will include biased sampling in the algorithm and let the visualization show its effect. From there, Coen takes us into genes and ecosystems.

[Javascript code used in this visualization](https://github.com/Qyoom/qyoom.github.io/tree/master/assets/custom_js/AlphaPack9.js)


