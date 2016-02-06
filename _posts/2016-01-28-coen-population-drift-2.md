---
layout: post
title:  "Natural Selection and Population Drift (Part 2)"
date:   2016-01-20 11:18:25 -0800
---
In [Part 1 of this series](http://qyoom.github.io/coen-population-drift-1/) I used a stacked bar chart to visualize my interpretation of the population drift algorithm described by Enrico Coen in the first chapter of his book *Cells to Civilizations, The Principles of Change That Shape Life*. See that post for an overview of the four main principles Coen explains are at play in evolution (variation, competition, persistence, reinforcement). Here I have used what in D3js is called packed circles, or bubble chart, to render a more figurative, real-time version of the algorithm (Note: may take up to 5 or more minutes to complete).

####Cycles of selection and replication drifting toward convergence

<div id="chart"></div>

<script src="/assets/js_libs/d3.min.js" charset="utf-8"></script>
<script src="/assets/js_libs/underscore-min.js"></script>
<script src="/assets/custom_js/MarblesSim12.js"></script>

In his book, Coen uses a static drawing of marbles in a container and describes how successive samples of 200 marble replicate themselves back to the full population limit of 1000. Here we are showing the algorithm happening in real time. Coen explains how, even without the introduction of bias to favor one color over the other, the population will none the less eventually converge to one color. This phenomenon demonstrates that evolution does not require natural selection—the favoring of traits that contribute to survival—to cause change to happen in a population over time.

####Comparing the two visualizations

What is apparent to me in comparing these two visualizations is that the [stacked bar chart](http://qyoom.github.io/coen-population-drift-1/) is much more clear and efficient in showing the meandering shape of random selection leading to eventual population convergence on the representative trait. It conveys no idea of marbles or the process of selection or replication. Only the examined characteristic of population drift is shown, and it is effective. The web based visualization can be run repeatedly to give a tangible treatment of the random but consistent qualities of the algorithm. However, running the figurative version shown above multiple times (which you can do by clicking the page refresh icon) will take a good chunk of time.

####Early days of a project in progress

The current implementation shown here is still rough around the edges. I am still new with D3js and am learning the details of using this powerful and elegant visualization library. When I do get it smoothed out I think the figurative version can provide an interesting experience of the dynamic complexity of an evolving process. However it is not easy to see the shape or direction of the drift, at least not without spending several minutes watching closely. But it will eventually converge. I know because I've watched it a few times. It's a little like watching snow on an old style TV screen if you are old enough to remember that.

I want to compare more examples of this contrast between abstract and literal representations of phenomena as this project progresses. This will naturally involve some consideration of motive and effect for what is under study. I will have more observations and discoveries to share in upcoming posts.

####Next: Gaining Facility with D3js General Update Pattern

Although that implementation does a passable job simulating individual agents acting out evolutional principles of selection, competition, and replication in a population, I realize I need to get a better handle on the D3js "general update pattern" so that individual agent state remains coherent and trackable between cycles of dynamic change.

[Javascript code used in this visualization](https://github.com/Qyoom/qyoom.github.io/tree/master/assets/custom_js/MarblesSim12.js)

[Next: Gaining Facility with D3js General Update Pattern](http://qyoom.github.io/d3-gen-update-pattern/)


