---
layout: post
title:  "Natural Selection and Population Drift (Part 2)"
date:   2016-01-20 11:18:25 -0800
---
In [Part 1 of this series](http://qyoom.github.io/coen-population-drift-1/) I used a stacked bar chart to visualize my interpretation of the population drift algorithm described by Enrico Coen in the first chapter of his book *Cells to Civilizations, The Principles of Change That Shape Life*. See that post for an overview of the four main principles Coen explains are at play in evolution (variation, competition, persistence, reinforcement). Here I have used what in D3js is called packed circles, or bubble chart, to render a more figurative, real-time version of the algorithm.

####Cycles of selection and replication drifting toward convergence (may take up to 5 or more minutes)

<div id="chart"></div>

<script src="/assets/js_libs/d3.min.js" charset="utf-8"></script>
<script src="/assets/js_libs/underscore-min.js"></script>
<script src="/assets/custom_js/MarblesSim12.js"></script>

In his book, Coen uses a static drawing of marbles in a container and describes how successive samples of 200 marble replicate themselves back to the full population limit of 1000. Here we are showing the algorithm happening in real time. Coen explains how, even without the introduction of bias to favor one color over the other, the population will none the less eventually converge to all one color. This phenomenon demonstrates that evolution does not require natural selection—the favoring one set of traits—to cause change to happen to a population over time.

####Comparing the two visualizations

What is apparent to me in comparing these two visualizations is that the [stacked bar chart](http://qyoom.github.io/coen-population-drift-1/) does a much more clear and efficient job of showing the meandering shape of random selection leading toward eventual population convergence on the representative color trait. There, no idea of marbles or the process of selection or replication are shown. Only the examined characteristic of population drift is shown, and it is effective. I like using the stacked bar chart because it demonstrates visually what Coen explains in text. The web based visualization can be run repeatedly to give a fuller treatment of the random but consistent qualities of the algorithm. Running this guy above multiple times (which you can do by clicking the page refresh icon) will take a good chunk of your day.

####Early days of a project in progress

I must also confess that the current implementation shown here is still rough around the edges. I am yet a newbie with D3js and am learning the details of using this powerful and elegant visualization library. When I do get it smoothed out I think the literal figurative nature of the visualization can provide an interesting experience of the dynamic complexity of an evolving process. However it is not easy to see the shape or direction of the drift, at least not without spending several minutes closely watching. It will eventually converge to one or the other color. I know because I've watched it a few times. It's a little like watching snow on an old style TV screen if you are old enough to remember that.

I want to compare more examples of this contrast between abstract and literal representations of phenomena as this project progresses. This will naturally involve some consideration of motive, intent, and effect of what is being studied or observed. I will have more observations and discoveries to share in upcoming posts.

####Next: Introducing reinforcement and bias

To finish the treatment of Coen's four principles of evolution I will include biased sampling in the algorithm and let the visualization show its effect. From there, Coen takes us into genes and ecosystems.

[Javascript code used in this visualization](https://github.com/Qyoom/qyoom.github.io/tree/master/assets/custom_js/MarblesSim12.js)



