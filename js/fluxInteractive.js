var START_YEARS = 0;//Initial value for years. Set as CONSTANT to prevent side-effects
var START_TREES = 60;//Initial value for tree. Set as CONSTANT to prevent side-effects
var START_SOILNUM = 120;//Initial value for years. Set as CONSTANT to prevent side-effects
var flowIncrArrow = document.getElementById("flowIncrArrow");//Container for arrow
var dentrArrow = document.getElementById("dentrArrow");//Container for arrow
var uptakeArrow = document.getElementById("uptakeArrow");//Container for arrow
var decompArrow = document.getElementById("decompArrow");//Container for arrow
var soilPool = document.getElementById("soilPool");//Container for soilPool
var treePool = document.getElementById("treePool");//Container for treePool
var years, trees, soilNum;//Variables for reset function to change
resetValue();//Call for reset function



function flowMaker() {//Button for increasing fixation

    var fixValue = document.getElementById("flowIncr").value;//Points to value for options
    var dentValue = document.getElementById("dentInc").value;//Points to value for options
    var uptakeValue = document.getElementById("uptakeInc").value;//Points to value for options
    var decompValue = document.getElementById("decompInc").value;//Points to value for options

    //var fix = document.getElementById("flowIncr").value;//Points to value for options
    //soilNum += ((fix / .5) - 3) * 5;//Equation for amount of soil nitrogen using fix values
    //trees += 10;//Value for tree incrementer

    years === 100 ? (document.getElementById("10years").disabled = true) : false;//Disables button at value 50years
    //var padding = treePool.style.padding;//Increases padding for tree pool
    //padding = Number(padding.slice(0, padding.length - 2));
    //treePool.style.padding = (padding + 2) + 'px';

    years += 10;//Value for year incrementer
    soilNum += ((fixValue * 10) + (decompValue * 10)) - ((uptakeValue * 10) + (dentValue * 10));//equations for output
    trees += ((uptakeValue * 10) - (decompValue * 10));//equations for output
    if (trees<=0) {
        trees = 0;
        document.getElementById("treePool").style.display = "none";
    } else {
        document.getElementById("treePool").style.display = "block";
    }

    if (soilNum>=200) {
        soilNum = 200;

    }

    render();
}



function render() {//created to stop redundancy in the resetValue function
    document.getElementById("tree").innerHTML = trees;
    document.getElementById("year").innerHTML = years;
    document.getElementById("soil").innerHTML = soilNum;
    soilPool.style.padding = Math.round(soilNum/10 + 50) + 'px';//
}

function resetValue() {//resets value for years, trees soil and padding.
    years = START_YEARS;//constants to reset values
    trees = START_TREES;
    soilNum = START_SOILNUM;
    treePool.style.padding = "";
    document.getElementById("treePool").style.display = "block";
    render();//renders trees/years/soilNum/soilpoolpadding initial values
    //
    //flowIncrArrow.style.borderLeftWidth = "0px";//Resets stroke width to original on dropdown change
    //flowIncrArrow.style.borderBottomWidth = "0px";//Resets stroke width to original on dropdown change
    //document.getElementById("arrowRight").style.display = "none";
    //
    //decompArrow.style.borderRightWidth = "0px";
    //document.getElementById("arrowDown").style.display = "none";
    //
    //uptakeArrow.style.borderRightWidth = "0px";
    //document.getElementById("arrowUp").style.display = "none";
    //
    //dentrArrow.style.borderRightWidth = "0px";//Resets stroke width
    //dentrArrow.style.borderBottomWidth = "0px";//Resets stroke width
    //document.getElementById("arrowUp2").style.display = "none";

    document.getElementById("decompInc").value = '4.0';
    document.getElementById("uptakeInc").value = '4.0';
    document.getElementById("flowIncr").value ='2.0';
    document.getElementById("dentInc").value = '2.0';
    document.getElementById("10years").disabled = false;
    window.onLoad = decompFlow();
    window.onLoad = uptakeFlow();
    window.onLoad = dentrificationFlow();
    window.onLoad = selectFlow();
}

document.addEventListener("change", selectFlow);

function selectFlow() {
    if (document.getElementById("flowIncr").value != 0) {
    flowIncrArrow.style.borderLeftWidth = "";//Resets stroke width / 2
    flowIncrArrow.style.borderBottomWidth = "";//Resets stroke width
    flowIncrArrow.style.display = "block";
    document.getElementById("arrowRight").style.display = "block";

    var fixWidth = document.getElementById("flowIncr").value;


    var widthNum = (2 * fixWidth) + 1;//Equation for finding stroke width y=2x+2

    var borderLeft = flowIncrArrow.style.borderLeftWidth;//Increases stroke width left
    borderLeft = Number(borderLeft.slice(0, borderLeft.length - 2));
    flowIncrArrow.style.borderLeftWidth = (borderLeft + widthNum) + 'px';

    var borderBottom = flowIncrArrow.style.borderBottomWidth;//Increases stroke width bottom
    borderBottom = Number(borderBottom.slice(0, borderBottom.length - 2));
    flowIncrArrow.style.borderBottomWidth = (borderBottom + widthNum) + 'px';
} else {
        flowIncrArrow.style.display = "none";
        document.getElementById("arrowRight").style.display = "none";
    }
}

document.addEventListener("change", dentrificationFlow);

function dentrificationFlow() {
    if (document.getElementById("dentInc").value != 0) {
    document.getElementById("arrowUp2").style.display = "block";
    dentrArrow.style.display = "block";
    dentrArrow.style.borderRightWidth = "";//Resets stroke width
    dentrArrow.style.borderBottomWidth = "";//Resets stroke width
    arrowUp2.style.right = "";

    var fixWidth = document.getElementById("dentInc").value;
    var widthNum = (2 * fixWidth) + 1;//Equation for finding stroke width y=2x+2

    var borderRight = dentrArrow.style.borderRightWidth;//Increases stroke width right
    borderRight = Number(borderRight.slice(0, borderRight.length - 2));
    dentrArrow.style.borderRightWidth = (borderRight + widthNum) + 'px';

    var widthDen = (2 * fixWidth / 2) + 17;
    var arrHeadChange = arrowUp2.style.right;
    arrHeadChange = Number(arrHeadChange.slice(0, arrHeadChange.length-2));
    arrowUp2.style.right = (arrHeadChange + widthDen) + 'px';

    var rightBorderBottom = dentrArrow.style.borderBottomWidth;//Increases stroke width bottom
    rightBorderBottom = Number(rightBorderBottom.slice(0, rightBorderBottom.length - 2));
    dentrArrow.style.borderBottomWidth = (rightBorderBottom + widthNum) + 'px';
    } else {
        dentrArrow.style.display = "none";
        document.getElementById("arrowUp2").style.display = "none";
    }
}

document.addEventListener("change", uptakeFlow);

function uptakeFlow() {
    if (document.getElementById("uptakeInc").value != 0) {
        document.getElementById("arrowUp").style.display = "block";
        uptakeArrow.style.borderRightWidth = "";//Resets stroke width
        uptakeArrow.style.display = "block";
        arrowUp.style.right = "";
        var fixWidth = document.getElementById("uptakeInc").value;
        var widthNum = (2 * fixWidth) + 1;//Equation for finding stroke width y=2x+2

        var borderRight = uptakeArrow.style.borderRightWidth;//Increases stroke right
        borderRight = Number(borderRight.slice(0, borderRight.length - 2));
        uptakeArrow.style.borderRightWidth = (borderRight + widthNum) + 'px';

        var widthUptake = (2 * fixWidth / 2) + 19;
        var arrHeadChange = arrowUp.style.right;
        arrHeadChange = Number(arrHeadChange.slice(0, arrHeadChange.length-2));
        arrowUp.style.right = (arrHeadChange + widthUptake) + 'px';

    } else {
        uptakeArrow.style.display = "none";
        document.getElementById("arrowUp").style.display = "none";
    }
}

document.addEventListener("change", decompFlow);

function decompFlow() {
    if (document.getElementById("decompInc").value != 0) {
        document.getElementById("arrowDown").style.display = "block";
        decompArrow.style.borderRightWidth = "";//Resets stroke width
        arrowDown.style.right = "";
        decompArrow.style.display = "block";
        var fixWidth = document.getElementById("decompInc").value;
        var widthNum = (2 * fixWidth) + 1;//Equation for finding stroke width y=2x+2

        var borderRight = decompArrow.style.borderRightWidth;//moves the arrowhead to center of border-line
        borderRight = Number(borderRight.slice(0, borderRight.length - 2));
        decompArrow.style.borderRightWidth = (borderRight + widthNum) + 'px';

        var widthDecomp = (2 * fixWidth / 2) + 180;
        var arrHeadChange = arrowDown.style.right;
        arrHeadChange = Number(arrHeadChange.slice(0, arrHeadChange.length-2));
        arrowDown.style.right = (arrHeadChange + widthDecomp) + 'px';


    } else {
        decompArrow.style.display = "none";
        document.getElementById("arrowDown").style.display = "none";
    }
}








