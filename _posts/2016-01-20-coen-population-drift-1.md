---
layout: post
title:  "Natural Selection and Population Drift (Part 1)"
date:   2016-01-20 11:18:25 -0800
---
Inspired by reading the first chapter in Enrico Coen's *Cells to Civilizations, The Principles of Change That Shape Life*, I decided to code my interpretation of the algorithm he describes for using two colors of marble to demonstrate population drift. Coen poses four principles whereby...

<div id="chart"></div>

<script src="/assets/javascripts/d3.min.js" charset="utf-8"></script>
<script src="/assets/javascripts/underscore-min.js"></script>
<script src="/assets/javascripts/pop_drift_lab_8x.js"></script>
<script src="/assets/javascripts/pop_drift_1_D3.js"></script>

The algorithm itself was pretty straight forward. The model starts with collection of 1000 marbles evenly divided between 500 orange and 500 blue. 200 marbles are randomly sampled (i.e. a lottery) and subsequently replicate themselves back to the maximum population size of 1000. Then another random sample of 200 marbles is taken and the cycle repeats itself until the total population has become either blue or orange thereby achieving a fixed state.

I chose a simple stacked bar chart to represent the progression of population ratios resulting from each lottery sample and replication cycle. The number of cycles run anywhere from several tens, to a few hundred befor converging. An interesting phenomena is that the population may at times seem about to converge on one color, only to drift away and ultimately end up converging on the opposite color.

Of the four principles that Coen presents, reinforcement is left out of the picture in this version of the algorithm. It shows that populations can evolve even when biased selection is not a factor.

Because the number of cycles that the algorithm typically takes to converge, the bar chart visualization does not easily fit on the screen, at least at the scale presented, and scrolling is required to see the whole thing. Also, the variable size of the chart dictates that no fixed width can be set (I have seen the number of cycles exceed 800 on one occasion.)

The bar chart does a good job, in my opinion, of depicting the often meandering shape and variable length of the sequence of drifting population ratios. In his book, Coen includes an illustration of marbles as small circles inside of a large circle which acts as their container (i.e. population boundary). I became interested in bringing this more literal depiction of the marbles and their environment to life, showing the actual sample selections and replications in "real" time. That is what I cover in the next posting of this series. The third posting in this series will add the principle of reinforcement using sample bias to complete Coen's treatment of natural selection in his first chapter.