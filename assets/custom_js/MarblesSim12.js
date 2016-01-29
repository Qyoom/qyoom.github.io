var blueColor = "#3333ff";
var orangeColor = "#e67300";
var sampleSize = 200;
var maxPopulation = 1000;
var halfPop = d3.round(maxPopulation / 2, 0);
var sp = .25; // speed factor
var convergence = false; // sample convergence

function newBlue() {
    return {"color": blueColor, "value": 25};
}

function newOrange() {
    return {"color": orangeColor, "value": 25};
}

function initPopulation(numBlue, numOrange) {
    var data = {
        "value": "100",
        "color": "#e6e6e6",
        "children": []
    };

    for(var i = 0; i < numBlue; i++) {
        data.children.push(newBlue());
    }
    for(var i = 0; i < numOrange; i++) {
        data.children.push(newOrange());
    }

    data.children = _.shuffle(data.children);

    return data;
} // end run

// Inclusive
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIntArray(size, lowerBound, upperBound) {
    var result = new Array(size);
    var resultIndex = 0;

    while(resultIndex < size) {
        var randInd = randomInt(lowerBound, upperBound);
        if(!_.contains(result, randInd)) {
            result[resultIndex] = randInd;
            resultIndex += 1;
        }
    }

    return result;
}

<!-- ------------------------ -->

var pop = {};

pop = initPopulation(halfPop, halfPop);

var width = 500,
    height = 500;

var canvas = d3.select("div#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
        //.attr("transform", "translate(50, 50)");

var pack = d3.layout.pack()
    .size([width, height - 50])
    .padding(10);

function update(pop) {
    var nodes = pack.nodes(pop);

    // update all subsequen data
    var node = canvas.selectAll(".node")
        .data(nodes);

    node.exit().remove();

    // enter first data
    node.enter()
        .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + ", " + d.y + ")";
            });

    var marble = node.append("circle")
        .attr("r", function(d) { return d.r; })
        .attr("fill", function(d) { return d.color; })
        .attr("stroke-width", 0);
        //.attr("stroke", "#e6e6e6");

    <!-- -------------------------- -->

    var sampleIndex = randomIntArray(sampleSize, 1, maxPopulation);
    var selected = marble.filter(function(d, i) { 
        return _.contains(sampleIndex, i); 
    }) // TODO: use [fromIndex]
    .attr("stroke", function(d) {
        return d.color;
    });

    var blueSelected = selected.filter(function(d) {
        return d.color === blueColor;
    });
    var blueSelectedCount = blueSelected.size();

    var blueSelectedRatio = d3.round(blueSelectedCount / sampleSize, 2);
    var orangeSelectedRatio = d3.round(1 - blueSelectedRatio, 2);

    console.log("blueSelectedRatio: " + blueSelectedRatio);
    console.log("orangeSelectedRatio: " + orangeSelectedRatio);

    // Selected transition
    selected.transition().duration(1000 * sp).delay(500 * sp)
        .attr("stroke-width", 4);

    // selected transition to normal
    selected.transition().duration(2000 * sp).delay(1500 * sp)
        .attr("stroke-width", 0)
        .attr("stroke", "#e6e6e6");

    if(!convergence) {
        // This test only indicates convergence in the sample. We need to allow one
        // population convergence to follow sample convergence.
        if(blueSelectedRatio === 1 || orangeSelectedRatio === 1) convergence = true; // terminal cycle

        sampleIndex.unshift(0);
        var notSelected = marble.filter(function(d, i) { 
            return !_.contains(sampleIndex, i); 
        }); // TODO: use [fromIndex]
        // notSelected fade out
        notSelected.transition()
            .attr("fill", "#e6e6e6")
            .attr("stroke", "#e6e6e6")
            .attr("stroke-width", 0)
            .duration(2000 * sp).delay(750 * sp);

        var blueReplicantsCount = d3.round(blueSelectedRatio * maxPopulation);
        var orangeReplicantsCount = d3.round(orangeSelectedRatio * maxPopulation);

        console.log("blueReplicantsCount: " + blueReplicantsCount);
        console.log("orangeReplicantsCount: " + orangeReplicantsCount);

        var newPop = initPopulation(blueReplicantsCount, orangeReplicantsCount);
    
        setTimeout(function() {
            update(newPop);
        }, 6000 * sp);

    } // end sample convergence condition
} // end update

update(pop);