---
layout: post
title:  "Natural Selection and Population Drift (Part 1)"
date:   2016-01-20 11:18:25 -0800
---
Inspired by reading the first chapter in Enrico Coen's *Cells to Civilizations, The Principles of Change That Shape Life*, I decided to code and visualize my interpretation of the algorithm he describes for using two colors of marble to demonstrate population drift.

Coen presents four principles that are at play in the process of natural selection. The first three—variation, competition, and persistence—are represented in this first model I've rendered to illustrate his example. A fourth principle, reinforcement, representing the effect of survival-based bias, will be added to the mix in the third posting in this series.

####Cycles of selection and replication drifting toward convergence (click page refresh)

<div id="chart"></div>

<script src="/assets/js_libs/d3.min.js" charset="utf-8"></script>
<script src="/assets/js_libs/underscore-min.js"></script>
<script src="/assets/custom_js/pop_drift_lab_8x.js"></script>
<script src="/assets/custom_js/pop_drift_1_D3.js"></script>

####Timeline model showing shape of random selection

I chose to use a simple stacked bar chart in D3js. An interesting phenomena is that the population often meanders and may at times seem about to converge to one color only to drift away and ultimately converge on the opposite color. The algorithm itself was pretty straight forward (see code links below). The model starts with collection of 1000 marbles evenly divided between 500 orange and 500 blue. 200 marbles are randomly sampled (i.e. a lottery) and subsequently replicate themselves back to the maximum population size of 1000. Then, another random sample of 200 marbles is taken and the cycle repeats itself until the total population has become either blue or orange thereby achieving a fixed state.

Each time you click the page refresh icon in your browser address bar you will observe a new sequence as described above. You will usually need to scroll to the right to see the whole sequence of selection-replication cycles. Give it a try.

####3 of 4 principles at work

Of the four principles that Coen presents, reinforcement is left out of the picture in this version of the algorithm. Variation is represented by some marbles being orange and some being blue. Competition (i.e. the struggle for survival) exists because of finite resources which is represented by imposing a maximum population size of 1000. 200 marbles are randomly selected and persistence means that they are the ones that replicate back to the maximum population size. Reinforcement happens when a trait or feature that is inherited from one generation to the next helps promote the survivability of the individual. The presence of random variation, struggle for survival (competition), and persistence of traits shows that populations can evolve (i.e. change, with some traits going extinct) even when bias is not a factor. In other words evolution does not depend on natural selection (i.e. bias towards one trait or another).

####Next: A different view: using the D3js stacked circles layout

In his book, Coen includes an illustration of the marbles as small circles inside of a large circle which acts as their population boundary. In the next post I will bring this more figurative representation to life with a model that includes each individual marble as the cycles of selection and replications take place in "real" time.

[Javascript code used to generate the simulation data](https://github.com/Qyoom/qyoom.github.io/blob/master/assets/custom_js/pop_drift_lab_8x.js)

[D3js code used to create the visualization](https://github.com/Qyoom/qyoom.github.io/blob/master/assets/custom_js/pop_drift_1_D3.js)

[Earlier Scala version that preceded this visualization](https://github.com/Qyoom/ScalaLab3/blob/master/src/main/scala/books/cells_to_civilizations/ch1/PopulationDrift5.scala)

[Next: Natural Selection and Population Drift (Part 2)](http://qyoom.github.io/coen-population-drift-2/)



