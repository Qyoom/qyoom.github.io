---
layout: post
title:  "Preliminary to pathfinding in a grid"
date:   2016-02-19 10:18:25 -0800
---
Believe it or not: The grid below is a graph. What is a graph? A graph is a set of nodes, or vertices, that are connected by paths, also called edges. The term "edge" in a grid is particularly salient as each cell ajoins each of its neighbors along its edges. The path from one node, or cell, to its neighbor is at its edge. If you draw your cursor across the grid below you will freely follow paths sequentially connecting nodes which are jam-packed like eggs in a carton, tiles in a mosaic, atoms in a crystal, or people in a packed subway car.

####Draw your cursor across grid (not set up for touch device)

<div id="grid"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>

<script src="/assets/custom_js/grid_neighbors_3.js"></script>

####Proximity is 9/10ths of a relationship

Paths in a grid have quite a lot to do with proximity, as do higher order relationsips which we will be exploring in upcoming posts. For now, we can observe that wherever we are—represented here as the dark cell under our cursor—we have awareness of our immediate surroundings, represented as the circumference of adjacent cells with lighter shading. This awareness, which we might take for granted, is achieved by a structural, algorithmic, or sensory awareness, which may be inate, or which may be learned or optimized.

This experiment is a baby step forward in my venture to learn D3js (and other libraries and frameworks) to represent ideas about games, search space, pathfinding, heuristics, simulation, and anything under or beyond the sun.

[Javascript code used in this visualization](https://github.com/Qyoom/qyoom.github.io/tree/master/assets/custom_js/grid_neighbors_3.js)


