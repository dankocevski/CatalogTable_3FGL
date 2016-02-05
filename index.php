<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en-us">
<head>
    <title>Fermi-LAT 3FGL Catalog</title>

    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <script type="text/javascript" src="./js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="./js/raphael-2.1.0.min.js"></script>
    <script type="text/javascript" src="./js/kartograph.js"></script>
    <script type="text/javascript" src="./js/table2CSV.js" > </script> 
    <!-- <script src="bootstrap.min.js"></script> -->

    <link rel="stylesheet" hrmouseef="./css/reset.css" type="text/css" />
    <link rel="stylesheet" href="./css/bootstrap.css" type="text/css" />
    <script src='http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'></script>
    <link rel="stylesheet" href="/ssc/inc/css/fssc.css">

    <script>
        $(".modal-wide").on("show.bs.modal", function() {
            var height = $(window).height() - 200;
            $(this).find(".modal-body").css("max-height", height);
        });
    </script>

</head>

<!-- custom css -->
<style type="text/css">


    #k-proj-title {
        text-align: center;
    }

    /* The selection tool tip */
    #tip {
        border: solid;
        border-radius: 5px;
        background-color: rgba(255,255,255,.90);
        /*background-color: white;   */
        /*opacity: 0.8;*/
        border: 2px solid rgba(0, 0, 0, .9);
        position: absolute;
        height: 90px;
        width: auto;    
        top: 100px;
        box-shadow: 0 1px 2px rgba(0,0,0,.4), 0 1px 0 rgba(255,255,255,.5) inset;
        text-align: left;
        color: #000;
        padding: 10px 10px 0px 10px;
        visibility: hidden;
        /*font-weight: bold;*/
        font-size: 14px;
        line-height: 125%;
    }

    /* The red selection circle */
    #Selection {
        border: solid;
        border-radius: 15px;
        border-width: 2px;
        border-color: red;
        opacity: 0.75;
        position: absolute;
        height: 15px;
        width: 15px;    
        top: 100px;
        visibility: hidden;
    }


    /* Removing the hover coloring from bootstrap tables */
    .table tbody tr:hover td,
    .table tbody tr:hover th {
      background-color: transparent;
    }

</style>

<body id="body-plain">


    <!-- Start Page Container -->
    <div id="page-container-plain">

        <!-- Start NASA Banner -->
        <div id="nasa-banner-plain">

            <!-- Left - Logo -->
            <div class="nasa-logo">
                <a href="http://www.nasa.gov/"><img src="/ssc/inc/img/nasa_logo.gif" width="140" height="98" border="0" alt="NASA Logo"></a>
            </div>
        
            <!-- Middle - Affiliations -->
            <div id="nasa-affiliation">
                <h1><a href="http://www.nasa.gov/">National Aeronautics and Space Administration</a></h1>
                <h2><a href="http://www.nasa.gov/goddard">Goddard Space Flight Center</a></h2>
            </div>
            
            <!-- Right - Search and Links -->
            <div id="nasa-search-links">
                <div id="header-links">
                    <a href="/ssc/">FSSC</a> &bull; <a href="http://heasarc.gsfc.nasa.gov/">HEASARC</a> &bull; <a href="http://science.gsfc.nasa.gov/">Sciences and Exploration</a>
                </div>
            </div>

        </div>
        <!-- End NASA Banner -->

        <!-- Start Mission Banner Graphic -->
        <div id="mission-banner-plain">
            <a href="/ssc/"><img src="/ssc/inc/img/fssc_banner.jpg" width="952" height="100" alt="Fermi Science Support Center" /></a>
        </div>
        <!-- End Mission Banner Graphic -->



        <div id="container">

                <center>

                <H1>Fermi-LAT 3FGL Catalog - Interactive Table</H1>
                <BR>

                <script type="text/javascript" src="./js/dat.gui.js"></script>
                <script type="text/javascript">

                    var GlobeOpt = function() {
                        this.lon0 = 0;
                        this.lat0 = 0;
                        this.lat1 = 0;
                        this.lat2 = 0;
                        this.dist = 2;
                        this.up = 0;
                        this.tilt = 0;
                        this.proj = 'aitoff';
                        this.projstr = '+proj=lcc +lat_1=0 +lat_0=0 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m',
                        //this.flip = 0;
                        this.offsetx = 0;
                        this.offsety = 0;
                        this.startx = 0;
                        this.starty = 0;
                        this.deltalon = 0;
                        this.deltalat = 0;
                        this.isdragged = false;
                        this.firstclick = true;
                    };

                    var P;
                    frame = 0;

                    var globeopt = new GlobeOpt();
                    var url = location.href.split('#');
                    if (url.length>1) globeopt.proj = url[1];

                    var points_CanvasProjection = new Array();
                    var userPoint_CanvasProjection = new Array();
                    var mouseCoords;

                    var paths = new Array();
                    var Record = 0;
                    var TerminalOutput = new String;
                    var disableLabels = 0;
                    var disableGalacticPlane = 0;
                    var userData = new Array();
                    //userData = [];

                    var previousRowElement;
                    var sourceName;
                    var sourceRA;
                    var sourceDec;
                    var sourceGlon;
                    var sourceGlat;

                    var lines = 100;
                    var offset = 0;

                    var numberOfSources;
                    var classSelectURLParameters = '';
                    var keywordSearchURLParameters = '';

                    var numberOfTableRows;

                    var width = 1000;
                    var height = 600;

                    function GetUrlValue(VarSearch){
                        var SearchString = window.location.search.substring(1);
                        var VariableArray = SearchString.split('&');
                        for(var i = 0; i < VariableArray.length; i++){
                            var KeyValuePair = VariableArray[i].split('=');
                            if(KeyValuePair[0] == VarSearch){
                                return KeyValuePair[1];
                            }
                        }
                    }

                    function FillTable(data) {

                        // $('#dataTableDiv').html('<table id="dataTable" class="styled-table" style="margin-top:25px"> </table>');
                        // $('#dataTable').html('<table id="dataTable" class="styled-table" style="margin-top:25px"></table>');

                        var row = new Array(), j = -1;

                        var header = '<tr> \
                        <th>Source Name</th> \
                        <th>Association</th> \
                        <th>RA</th> \
                        <th>Dec</th> \
                        <th>Gal l</th> \
                        <th>Gal b</th> \
                        <th>Average Significance</th> \
                        <th>Flux Density 1-100 GeV<BR>(photons cm<sup>-2</sup>s<sup>-1</sup>MeV<sup>-1</sup>)</th> \
                        <th>+/-</th> \
                        <th>Flux 1-100 GeV<BR>(photons cm<sup>-2</sup>s<sup>-1</sup>)</th> \
                        <th>+/-</th> \
                        <th>Spectral Type</th> \
                        <th>Spectral Index</th> \
                        <th>+/-</th> \
                        <th>Variability Index</th> \
                        <th>Classification (code)</th> \
                        <th>TEV Cat</th> \
                        <th>TEV Association</th> \
                        <th>Catalog Flags</th> \
                        <th>Size</th> \
                        <th>Classification</th> \
                        <th>Light Curve<BR>(Likelihood)</th> \
                        <th>Spectrum</th> \
                        <th>Data<BR>Access</th> \
                        </tr>'


                        for (var i=0, size=data.length; i<size; i++) {

                            sourceRecord = data[i];
                            row[++j] = '<tr>';

                            for (var key in sourceRecord){
                                row[++j] ='<td>';
                                row[++j] = sourceRecord[key];
                                row[++j] = '</td>';
                            }


                            // Add the data access columns
                            row[++j] = "<td><a href=\"./data/3FGL_lc_v5/" + sourceRecord['Source_Name'].replace(' ', '_').replace('+','p').replace('.','d').replace('-','m') + "_lc.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Link</a></td>";
                            // row[++j] = "<td><a href=\"http://fermi.gsfc.nasa.gov/ssc/data/access/lat/4yr_catalog/ap_lcs/lightcurve_" + sourceRecord['Source_Name'].replace(' ', '').replace('+','p') + ".png\" onclick=\"window.open(this.href,'targetWindow','width=900px, height=600px'); return false;\">Link</a></td>";
                            row[++j] = "<td><a href=\"./data/3FGL_spec_v5/"  + sourceRecord['Source_Name'].replace(' ', '_').replace('.','d').replace('+','p') + "_spec.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Link</a></td>";
                            row[++j] = "<td><a href=\"http://fermi.gsfc.nasa.gov/cgi-bin/ssc/LAT/LATDataQuery.cgi?coordfield=" + sourceRecord['RAJ2000'] + "," + sourceRecord['DEJ2000'] + "\" target=\"_blank\"" + ">Link</a></td>";
                            row[++j] ='</tr>';
                        }



                        // Add the header to the start of the array
                        row.unshift(header);

                        // Join the row array into one long string and place it inside the testTable element
                        $('#dataTable').html(row.join('')); 

                        toggleColumns()

                        // Record the number of table rows
                        numberOfTableRows = $('#dataTable tr').length;


                        if (points.length < parseFloat(lines) && points.length == data.length) {

                            console.log('Changing source count!')
                            document.getElementById('previousSourcesSpan').innerHTML = '< Previous ' + lines + ' Sources';
                            document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: 0 - ' + points.length
                            document.getElementById('nextSourcesSpan').innerHTML = 'Next ' + lines + ' Sources >'

                        }


                        document.getElementById('LoadingDiv').style.display = "none";


                        // Hide any visible tool tips
                        var tip = document.getElementById('tip');
                        tip.style.visibility = "hidden";
                        var Selection = document.getElementById('Selection');
                        Selection.style.visibility = "hidden";   
                    }

                    function queryDB(typeOfRequest, additionalURLParameters) {


                        // Limit the scope of the xmlhttp object to this function
                        var xmlhttp;
                        var URL;

                        console.log("Creating New XMLHttpRequest.")
                        if (window.XMLHttpRequest) {
                            // code for IE7+, Firefox, Chrome, Opera, Safari
                            xmlhttp = new XMLHttpRequest();

                        } else {
                            // code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        
                        // Setup the request
                        // var urlParameters = "typeOfRequest=" + encodeURIComponent(typeOfRequest);
                        var urlParameters = "typeOfRequest=" + encodeURIComponent(typeOfRequest);

                        // xmlhttp.open("POST", "./queryDB.php", true);
                        if (additionalURLParameters === undefined) {
                            URL = "queryDB.php" + "?" + urlParameters
                        } else {
                            URL = "queryDB.php" + "?" + urlParameters + additionalURLParameters
                        }

                        xmlhttp.open("GET", URL, true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


                        xmlhttp.onreadystatechange=function() {

                            if (xmlhttp.readyState==4 && xmlhttp.status==200) {

                                console.log('Response recieved.')
                                var data = JSON.parse(xmlhttp.responseText);

                                if (typeOfRequest === 'TableData') {
                                   FillTable(data);

                                   // if (additionalURLParameters.search('Class')) {

                                   //      // Reload the map data
                                   //      points = data;
                                   //      renderFrame();
                                   // }

                                }
                             
                                if (typeOfRequest === 'MapData') {
                                                                   
                                    // Reload the map data
                                    points = data;
                                    renderFrame();
                                }

                                if (typeOfRequest === 'ROISearchCelestial') {

                                    ra = document.getElementById('raInput').value;
                                    dec = document.getElementById('decInput').value;
                                    radius = document.getElementById('radiusInput').value;
                        
                                    // Reload the table
                                    FillTable(data);

                                    // Reload the map data
                                    points = data;
                                    renderFrame();

                                    document.getElementById('rangeDisplay').innerHTML = 'Found ' + data.length.toString() + ' sources within ' + radius + ' deg of RA, Dec = (' + ra + ', ' + dec + ')';

                                }

                            } 
                        }

                        console.log('Sending ' + URL);
                        xmlhttp.send();
                        console.log("Waiting for response...");
                    }

                    // $.getJSON('./catalogs/gll_psc_v14.json', function(points) {
                    //         console.log(points);
                    //         window.points = points;
                    //         //renderFrame();
                    // });

                    // $.getJSON('userData.json', function(userData) {
                    //         window.userData = userData;
                    //         //renderFrame();
                    // });

                
                    function createCanvas(id,w,h) {
                        if (document.getElementById(id) != null) {
                            var ctx = document.getElementById(id).getContext("2d");
                            ctx.clearRect(0,0,w,h+20);
                            return ctx;
                        }
                        var canvas = document.createElement("canvas");
                        canvas.setAttribute("id", id);
                        canvas.setAttribute("width", w+"px");
                        canvas.setAttribute("height", h+"px");
                        canvas.setAttribute("margin", "auto");
                        $('#map-parent').append(canvas);
                        var ctx = canvas.getContext("2d");
                        return ctx;
                    };

                    function showMap(p, paths, points, mouseCoords, userData) {
                        P = new kartograph.proj[p](globeopt);
                        xy = P.project(13,14);

                        if (isNaN(xy[0]) || isNaN(xy[1])) {
                            console.error(p, P, xy);
                            return;
                        };

                        var
                        lon, lat, i,
                        //w = $('#map-parent').width(),
                        // w = 800,
                        // h = 400,
                        w = width,
                        h = height,

                        grat = 15,
                        sea = P.sea(),
                        bbox = P.world_bbox(),
                        view,
                        ctx = createCanvas("proj", w,h+20),
                        len = ctx.measureText(p.toUpperCase()).width;

                        console.log(w);
                        console.log(h);

                        ctx.beginPath();
                        ctx.lineWidth = 1.0;
                        ctx.fillStyle ="#fff";
                        view = new kartograph.View(bbox, w, h, 10);
                        for (i=0;i<sea.length;i++) {
                            xy = view.project(sea[i]);
                            if (i==0) ctx.moveTo(xy[0], xy[1]);
                            else ctx.lineTo(xy[0], xy[1]);
                        }
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();

                       // graticule
                        ctx.beginPath();
                        ctx.lineWidth = 0.2;
                        for (lat=0;lat<90;lat+=grat) {
                            var lats = lat == 0 ? [0] : [lat,-lat];
                            for (var l in lats) {
                                var lat_ = lats[l];
                                var line = [];
                                for (lon=-180;lon<180;lon++) {
                                    line.push([lon,lat_]);
                                }
                                for (var i=0;i<line.length-1;i++) {
                                    p0 = line[i];
                                    p1 = line[i+1];
                                    d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                                    if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 30) {
                                        p0 = view.project(P.project(p0[0],p0[1]));
                                        p1 = view.project(P.project(p1[0],p1[1]));
                                        ctx.moveTo(p0[0],p0[1]);
                                        ctx.lineTo(p1[0],p1[1]);
                                    }
                                }
                            }
                        }
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();


                       // graticule
                        ctx.beginPath();
                        ctx.lineWidth = 0.2;
                        for (lat=0;lat<90;lat+=grat) {
                            var lats = lat == 0 ? [0] : [lat,-lat];
                            for (var l in lats) {
                                var lat_ = lats[l];
                                var line = [];
                                for (lon=-180;lon<180;lon++) {
                                    line.push([lon,lat_]);
                                }
                                for (var i=0;i<line.length-1;i++) {
                                    p0 = line[i];
                                    p1 = line[i+1];
                                    d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                                    if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 30) {
                                        p0 = view.project(P.project(p0[0],p0[1]));
                                        p1 = view.project(P.project(p1[0],p1[1]));
                                        ctx.moveTo(p0[0],p0[1]);
                                        ctx.lineTo(p1[0],p1[1]);
                                    }
                                }
                            }
                        }
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();

                        // graticule
                        ctx.beginPath();
                        ctx.lineWidth = 0.2;
                        for (lon=0;lon<181;lon+=grat) {
                            var lons = lon == 0 || lon == 180 ? [lon] : [lon,-lon];
                            $.each(lons, function(l, lon_) {
                                var line = [];
                                for (lat=-90+(lon % 90 == 0 ? 0 : grat);lat<90-(lon%90 == 0 ? 0 : grat)+1;lat+=0.25) {
                                    line.push([lon_,lat]);
                                }
                                for (var i=0;i<line.length-1;i++) {
                                    p0 = line[i];
                                    p1 = line[i+1];
                                    d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                                    if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 100) {
                                        p0 = view.project(P.project(p0[0],p0[1]));
                                        p1 = view.project(P.project(p1[0],p1[1]));
                                        ctx.moveTo(p0[0],p0[1]);
                                        ctx.lineTo(p1[0],p1[1]);

                                    }
                                }
                            });
                        }
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();


                        // Paths
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        var cl, line, p0, p1, d;
                        for (cl=0; cl<paths.length; cl++) {
                            line = paths[cl];
                            for (i=0; i<line.length-1; i++) {
                                p0 = line[i];
                                p1 = line[i+1];
                                d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                                if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 100) {
                                    p0 = view.project(P.project(p0[0],p0[1]));
                                    p1 = view.project(P.project(p1[0],p1[1]));
                                    ctx.moveTo(p0[0],p0[1]);
                                    ctx.setLineDash([0]);
                                    ctx.lineTo(p1[0],p1[1]);
                                }
                            }
                        }
                        ctx.stroke();
                        ctx.fill()
                        ctx.closePath();


                        // Celestial Coordinates 
                        // ctx.lineWidth = 1;
                        // var i, point, p0;
                        // points_CanvasProjection = new Array();
                        // for (i=0; i<points.length; i++) {
                        //     point = points[i];
                        //     point_CanvasProjection = view.project(P.project(parseFloat(point.RAJ2000), parseFloat(point.DEJ2000)));
                        //     points_CanvasProjection.push(point_CanvasProjection);
                        //     if (P._visible(parseFloat(point.RAJ2000),parseFloat(point.DEJ2000))) {
                        //         ctx.beginPath()
                        //         ctx.fillStyle = "rgba(0,0,0," + parseFloat(point.Size) * 0.115 + ")";
                        //         //ctx.strokeStyle = "rgba(0,0,0,0.0)";
                        //         ctx.arc(point_CanvasProjection[0], point_CanvasProjection[1], parseFloat(point.Size)/3, 0, 2 * Math.PI, false);
                        //         //ctx.stroke();
                        //         ctx.fill()
                        //         ctx.closePath();
                        //     }
                        // }
                        // ctx.closePath();

                        // Galactic Coordinates
                        ctx.lineWidth = 1;
                        var i, point, p0;
                        points_CanvasProjection = new Array();
                        for (i=0; i<points.length; i++) {
                            point = points[i];
                            point_CanvasProjection = view.project(P.project(360.-parseFloat(point.GLON), parseFloat(point.GLAT)));
                            points_CanvasProjection.push(point_CanvasProjection);
                            if (P._visible(360.-parseFloat(point.GLON), parseFloat(point.GLAT))) {
                                ctx.beginPath()
                                ctx.fillStyle = "rgba(0,0,0," + parseFloat(point.Size) * 0.115 + ")";
                                //ctx.strokeStyle = "rgba(0,0,0,0.0)";
                                ctx.arc(point_CanvasProjection[0], point_CanvasProjection[1], parseFloat(point.Size)/3, 0, 2 * Math.PI, false);
                                //ctx.stroke();
                                ctx.fill()
                                ctx.closePath();
                            }
                        }
                        ctx.closePath();

                        // Convert the user supplied coordinates into the canvas projection
                        // if (typeof sourceRA !== 'undefined' && typeof sourceDec !== 'undefined') {
                        //     if (P._visible(parseFloat(sourceRA),parseFloat(sourceDec))) {
                        //         userPoint_CanvasProjection = view.project(P.project(parseFloat(sourceRA), parseFloat(sourceDec)));
                        //     }
                        // }

                        if (typeof sourceGlon !== 'undefined' && typeof sourceGlat !== 'undefined') {
                            if (P._visible(parseFloat(sourceGlon),parseFloat(sourceGlat))) {
                                userPoint_CanvasProjection = view.project(P.project(360.-parseFloat(sourceGlon), parseFloat(sourceGlat)));
                            }
                        }


                        // User Submitted Data
                        if (userData.length > 0) {
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            var cl, line, p0, p1, d;
                            for (cl=0; cl<userData.length; cl++) {
                                line = userData[cl];
                                for (i=0; i<line.length-1; i++) {
                                    p0 = line[i];
                                    p1 = line[i+1];
                                    d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                                    if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 100) {
                                        p0 = view.project(P.project(p0[0],p0[1]));
                                        p1 = view.project(P.project(p1[0],p1[1]));
                                        ctx.moveTo(p0[0],p0[1]);
                                        ctx.setLineDash([0]);
                                        ctx.lineTo(p1[0],p1[1]);
                                    }
                                }
                            }
                            ctx.stroke();
                            ctx.fill()
                            ctx.closePath();
                        }
                       


                        // Galactic Plane
                        // if (disableGalacticPlane == 0) {
                        //     ctx.beginPath();
                        //     ctx.lineWidth = 0.2;
                        //     var cl, line, p0, p1, d;
                        //     for (cl=0; cl<galacticPlane.length; cl++) {
                        //         line = galacticPlane[cl];
                        //         for (i=0; i<line.length-1; i++) {
                        //             p0 = line[i];
                        //             p1 = line[i+1];
                        //             d = P.clon ? Math.abs(P.clon(p0[0])-P.clon(p1[0])) : 0;
                        //             if (P._visible(p0[0],p0[1]) && P._visible(p1[0],p1[1]) && d < 100) {
                        //                 p0 = view.project(P.project(p0[0],p0[1]));
                        //                 p1 = view.project(P.project(p1[0],p1[1]));
                        //                 ctx.moveTo(p0[0],p0[1]);
                        //                 ctx.lineTo(p1[0],p1[1]);
                        //             }
                        //         }
                        //     }  
                        //     ctx.stroke();
                        //     ctx.fill();
                        //     ctx.closePath();
                        //  }


                        // ctx.fillStyle = "rgba(0,100,0,0.5)"; //blue
                        // ctx.beginPath();
                        // ctx.arc(45,45,15,0,Math.PI*2,true);
                        // ctx.fill();                        
                        // ctx.closePath();

                        // Points
                        // ctx.fillStyle = "green";
                        // p0 = view.project(P.project(358.539,46.0915));   
                        // if (P._visible(358,46.0915)) {
                        //     ctx.beginPath()
                        //     ctx.arc(p0[0], p0[1], 10, 0, 2 * Math.PI, false);
                        //     ctx.fill()
                        //     ctx.stroke();
                        // }

                        return points_CanvasProjection, userPoint_CanvasProjection;
                    };

                    function renderFrame() {

                        points_CanvasProjection, userPoint_CanvasProjection = showMap(globeopt.proj, paths, points, mouseCoords, userData);

                        return points_CanvasProjection, userPoint_CanvasProjection;
                    };

                    function toggleColumn(checkbox) {

                        // Determine which checkbox was selected
                        var value = checkbox.value;

                        if (checkbox.checked == false) {

                            // Hide the column
                            console.log('Hiding Column ' + value)
                            $('td:nth-child(' + value + '),th:nth-child(' + value + ')').hide();

                            // Hide the erorr column for columns 8, 10, and 12
                            if (value == 8 || value == 10 || value == 13) {

                                var nextValue = (parseFloat(value) + 1).toString();
                                console.log('Hiding Column ' + nextValue)
                                $('td:nth-child(' + nextValue + '),th:nth-child(' + nextValue + ')').hide();
                            }

                        } else {

                            // Show the column
                            console.log('Showing Column ' + value)
                            $('td:nth-child(' + value + '),th:nth-child(' + value + ')').show();

                            // Show the erorr column for columns 8, 10, and 12
                            if (value == 8 || value == 10 || value == 13) {

                                var nextValue = (parseFloat(value) + 1).toString();
                                console.log('Showing Column ' + nextValue)
                                $('td:nth-child(' + nextValue + '),th:nth-child(' + nextValue + ')').show();
                            }
                        }
                    }

                    function toggleColumns() {

                        // check the states of the table configuration checkboxes
                        var checkboxes = $('#TableConfiguration').find(':checkbox')

                        for (var i=0, size=checkboxes.length; i<size; i++) {

                            checkbox = checkboxes[i]
                            var value = checkbox.value;

                            if (checkbox.checked == false) {

                                // Hide the column
                                console.log('Hiding Column ' + value)
                                $('td:nth-child(' + value + '),th:nth-child(' + value + ')').hide();

                                // Hide the erorr column for columns 8, 10, and 12
                                if (value == 8 || value == 10 || value == 13) {

                                    var nextValue = (parseFloat(value) + 1).toString();
                                    console.log('Hiding Column ' + nextValue)
                                    $('td:nth-child(' + nextValue + '),th:nth-child(' + nextValue + ')').hide();
                                }

                            } else {

                                // Show the column
                                $('td:nth-child(' + value + '),th:nth-child(' + value + ')').show();

                                // Show the erorr column for columns 8, 10, and 12
                                if (value == 8 || value == 10 || value == 13) {

                                    var nextValue = (parseFloat(value) + 1).toString();
                                    $('td:nth-child(' + nextValue + '),th:nth-child(' + nextValue + ')').show();
                                }
                            }
                        }
                    }

                    function reloadTable(direction) {

                        if (direction === 'next') {
                            console.log('Loading next ' + lines + ' lines...')
                            offset = (parseFloat(offset) + parseFloat(lines)).toString();
                        }
                        if (direction === 'previous') {
                            console.log('Loading previous ' + lines + ' lines...')
                            offset = (parseFloat(offset) - parseFloat(lines)).toString();
                        }

                        if (parseFloat(offset) <= 0) {
                            offset = 0;
                            document.getElementById('previousSourcesSpan').innerHTML = '< Previous ' + lines + ' Sources'
                            document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: 0 - ' + lines
                            document.getElementById('nextSourcesSpan').innerHTML = '<A id="nextSources" href="#" onclick="reloadTable(\'next\')"> Next ' + lines + ' Sources ></A>';
                        } 

                        if (parseFloat(offset) > 0) {
                            document.getElementById('previousSourcesSpan').innerHTML = '<A id="previousSources" href="#" onclick="reloadTable(\'previous\')"> < Previous ' + lines + ' Sources </A>';
                            document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: ' + offset + ' - ' + (parseFloat(lines) + parseFloat(offset)).toString()
                            document.getElementById('nextSourcesSpan').innerHTML = '<A id="nextSources" href="#" onclick="reloadTable(\'next\')"> Next ' + lines + ' Sources ></A>';
                        }

                        if ((parseFloat(lines) + parseFloat(offset)) >= points.length) {
                            document.getElementById('previousSourcesSpan').innerHTML = '<A id="previousSources" href="#" onclick="reloadTable(\'previous\')"> < Previous ' + lines + ' Sources </A>';
                            document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: ' + offset + ' - ' + points.length
                            document.getElementById('nextSourcesSpan').innerHTML = 'Next ' + lines + ' Sources >'

                        }

                        queryDB('TableData', classSelectURLParameters + '&lines=' + lines + '&offset=' + offset);
                    }

                    function CombinedSearch() {

                        // Get the user supplied coordinates and search radius
                        searchQuery = document.getElementById('KeywordSearchInput').value;

                        // Get the user supplied coordinates and search radius
                        ra = document.getElementById('raInput').value;
                        dec = document.getElementById('decInput').value;
                        radius = document.getElementById('radiusInput').value;


                        if (searchQuery.length > 0) {

                            // Encode any + signs
                            searchQuery = searchQuery.replace('+', '%2B');

                            // Construct the url parameters
                            keywordSearchURLParameters = '&Name=' + searchQuery;
                            console.log(keywordSearchURLParameters);

                        } else {

                            keywordSearchURLParameters = '';
                        }


                        if (ra.length > 0 && dec.length > 0 && radius.length > 0) {

                            // Make sure the input is in decimal degrees
                            if (ra.indexOf(':') > -1 || dec.indexOf(':') > -1) {
                                alert("Warning: Coordinates need to be supplied in decimal degrees!");
                                return
                            }

                            radiusSearchURLParameters = '&ra=' + ra + '&dec=' + dec + '&radius=' + radius

                        } else {
                            radiusSearchURLParameters = '';
                        }

                        // Reload the table data
                        // queryDB('ROISearchCelestial', classSelectURLParameters + radiusSearchURLParameters)
                        queryDB('MapData', classSelectURLParameters + radiusSearchURLParameters + keywordSearchURLParameters)
                        queryDB('TableData', classSelectURLParameters + radiusSearchURLParameters + keywordSearchURLParameters)

                        // Show the clear search button
                        document.getElementById('ClearSearchButtonSpan').style.display = "inline";

                        // Remove the navigation buttons
                        document.getElementById('previousSourcesSpan').style.visibility = "hidden";
                        document.getElementById('nextSourcesSpan').style.visibility = "hidden";
                    }

                    // function KeywordSearch() {

                    //     // Get the user supplied coordinates and search radius
                    //     searchQuery = document.getElementById('KeywordSearchInput').value;

                    //     // Encode and + signs
                    //     searchQuery = searchQuery.replace('+', '%2B');

                    //     // Construct the url parameters
                    //     keywordSearchURLParameters = '&Name=' + searchQuery;

                    //     queryDB('TableData', keywordSearchURLParameters + classSelectURLParameters + '&lines=' + lines + '&offset=' + offset);
                    //     queryDB('MapData', keywordSearchURLParameters + classSelectURLParameters)


                    // }

                    function clearSearch() {

                        // Clear the named search parameter
                        keywordSearchURLParameters = '';

                        // Reset the search field
                        document.getElementById('KeywordSearchInput').value = '';

                        // Reset the navigation controls
                        document.getElementById('previousSourcesSpan').innerHTML = '< Previous ' + lines + ' Sources'
                        document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: 0 - ' + lines
                        document.getElementById('nextSourcesSpan').innerHTML = '<A id="nextSources" href="#" onclick="reloadTable(\'next\')"> Next ' + lines + ' Sources ></A>';

                        // Hide the clear search button
                        document.getElementById('ClearSearchButtonSpan').style.display = "none";

                        // Add the navigation buttons
                        document.getElementById('previousSourcesSpan').style.visibility = "visible";
                        document.getElementById('nextSourcesSpan').style.visibility = "visible";

                        // Clear the form values
                        document.getElementById('raInput').value = "";
                        document.getElementById('decInput').value = "";
                        document.getElementById('radiusInput').value = "";


                        // Reload the table data
                        offset = 0;
                        queryDB('TableData', classSelectURLParameters + '&lines=' + lines + '&offset=' + offset);

                        // Reload the map data
                        queryDB('MapData', classSelectURLParameters)
                    }


                    function ExportTableData() {
                        var output = $('#dataTable').table2CSV({ delivery:'value' })
                        
                        var generator = window.open('', 'txt');

                        var element = generator.document.createElement('a');
                        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
                        element.setAttribute('download', 'data.txt');

                        element.style.display = 'none';
                        generator.document.body.appendChild(element);

                        element.click();

                        generator.document.body.removeChild(element);
                      
                    }


                    function ExportMap() {

                        var canvas = document.getElementById("proj");
                        var img    = canvas.toDataURL("image/png");
                        // document.write('<img src="'+img+'" target=\"_blank\""/>');

                        var generator = window.open('', 'png');
                        generator.document.write('<img src="'+img+'"/>');
                        generator.document.close();
                    }


                    function Resize() {


                        width=1000;
                        height=600;

                        htmlCanvas = document.getElementById('proj');
                        context = htmlCanvas.getContext('2d');
                        htmlCanvas.width = width;
                        htmlCanvas.height = height;

                        renderFrame();
                    }


                    $(function() {

                        <?php

                            $points = "points = [";

                            $db = new SQLite3('./catalogs/gll_psc_v14.db');

                            $queryStatement = 'SELECT * FROM Catalog';
                            $results = $db->query($queryStatement);
                            while ($row = $results->fetchArray()) {

                                $Source_Name = "\"Source_Name\": \"" . trim($row['Source_Name']) . "\",";
                                $ASSOC1 = "\"ASSOC1\": \"" . trim($row['ASSOC1']) . "\",";
                                $RAJ2000 = "\"RAJ2000\": \"" . trim($row['RAJ2000']) . "\",";
                                $DEJ2000 = "\"DEJ2000\": \"" . trim($row['DEJ2000']) . "\",";
                                $GLON = "\"GLON\": \"" . trim($row['GLON']) . "\",";
                                $GLAT = "\"GLAT\": \"" . trim($row['GLAT']) . "\",";
                                $Size = "\"Size\": \"" . trim($row['Size']) . "\",";

                                $point = "{" . $Source_Name . $ASSOC1 . $RAJ2000 . $DEJ2000 . $GLON . $GLAT . $Size . "}";

                                $points = $points . $point . ",";
                            }  

                            $points = $points . "]";
                            echo $points
                        ?>  

                        // Get the map data
                        // console.log('Calling queryDB(MapData)')
                        // points = queryDB('MapData');

                        // Load the map data
                        window.points = points;

                        // Get the table data
                        data = queryDB('TableData');


                        // Get the galactic plan data
                        $.getJSON('GalacticPlane.json', function(galacticPlane) {
                                window.galacticPlane = galacticPlane;
                                renderFrame();
                        });                            

                        // Update the GUI
                        window.gui = new dat.GUI({ 
                            autoPlace: false,
                            width: 330,
                            hideable: false,
                            resizable: false
                        });


                        $('.k-gui').append(gui.domElement);

                        gui.remember(globeopt);
                        var proj = [];
                        $.each(kartograph.proj, function(p) {
                            proj.push(p);
                        })
                        proj = proj.sort();
                        window.projopts = {
                            lon0: [-180,180, 1],
                            lat0: [-90, 90],
                            lat1: [-90, 90],
                            lat2: [-90, 90],
                            dist: [1.01, 10, 0.01],
                            up: [-180,180],
                            tilt: [-40,0],
                            projstr: 'str'
                        };


                        var updateGUI = function() {
                            // reset gui
                            try {
                                for (var i=gui.__controllers.length-1; i>=0; i--) {
                                    gui.remove(gui.__controllers[i]);
                                }
                            } catch (e) {}
                            gui.add(globeopt, 'proj', proj).onChange(function() {
                                updateGUI();
                                renderFrame();
                            });
                            $.each(projopts, function(key, val) {
                                if (kartograph.proj[globeopt.proj].parameters.indexOf(key) >= 0) {
                                    var s = val == 'str' ? gui.add(globeopt, key) : gui.add(globeopt, key, val[0], val[1]);
                                    if (val != 'str' && val.length == 3) s.step(val[2]);
                                    s.onChange(renderFrame);
                                }
                            });
                            $('#k-proj-title').html(kartograph.proj[globeopt.proj].title);
                            var url = location.href.split('#');
                            location.href = url[0]+'#'+globeopt.proj;
                        };

                        updateGUI();


                        $('#map-parent').click(function (e) {
                            globeopt.startx = e.pageX - this.offsetLeft;
                            globeopt.starty = e.pageY - this.offsetTop;
                        });

                        $('#map-parent').dblclick(function (e) {

                            var canvas = document.getElementById("proj");
                            offsetLet = canvas.offsetLeft;
                            offsetTop = canvas.offsetTop;

                            globeopt.startx = e.pageX - offsetLet;
                            globeopt.starty = e.pageY - offsetTop;

                            // Object IDs
                            var mouseXPosition = e.pageX - offsetLet;
                            var mouseYPosition = e.pageY - offsetTop;

                            mouseCoords = [mouseXPosition,mouseYPosition];
                            
                            // Get all the current points on the map
                            points_CanvasProjection, userPoint_CanvasProjection = renderFrame();

                            var d, i, point;
                            d = 100
                            var distances = new Array();
                           
                            for (i=0; i<points_CanvasProjection.length; i++) {

                                point_CanvasProjection = points_CanvasProjection[i];
                                point = points[i]
                                d = Math.sqrt( Math.pow(mouseXPosition - point_CanvasProjection[0], 2) + Math.pow(mouseYPosition - point_CanvasProjection[1], 2) );

                                if (d < 5) {

                                    var tip = document.getElementById('tip');
                                    tip.style.visibility = "visible";
                                    tip.style.left = (e.pageX - 95) + "px";
                                    tip.style.top = (e.pageY - 105) + "px";
                                    // document.getElementById("tip").innerHTML =  point.Source_Name + '<br>RA: ' + point.RAJ2000 + ', Dec: ' + point.DEJ2000 + '<br>Association: ' + point.ASSOC1;

                                    var lightcurveLink = "<a href=\"./data/3FGL_lc_v5/" + point.Source_Name.replace(' ', '_').replace('+','p').replace('.','d').replace('-','m') + "_lc.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Light Curve</a>";
                                    var spectrum = "<a href=\"./data/3FGL_spec_v5/"  + point.Source_Name.replace(' ', '_').replace('.','d').replace('+','p') + "_spec.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Spectrum</a>";

                                    document.getElementById("tip").innerHTML =  point.Source_Name + '<BR>RA: ' + point.RAJ2000 + ', Dec: ' + point.DEJ2000 + '<BR>Association: ' + point.ASSOC1 + '<BR>' + lightcurveLink  + ' | ' + spectrum;

                                    var Selection = document.getElementById('Selection');
                                    Selection.style.visibility = "visible";
                                    Selection.style.left = (point_CanvasProjection[0] + offsetLet - 7) + "px";
                                    Selection.style.top = (point_CanvasProjection[1] + offsetTop - 7) + "px";
                                    
                                    break;

                                } else {
                                    // Do nothing for now
                                }

                            }
                        });

                        
                        $('#map-parent').mousedown(function (e) {
                            globeopt.isdragged = true;
                        });
                        
                        $('#map-parent').mouseup(function (e) {
                            globeopt.isdragged = false;
                            globeopt.firstclick = true;
                            $('#status2').html((e.pageX - globeopt.offsetx - globeopt.startx) + ', ' + (e.pageY - globeopt.offsety - globeopt.starty));
                        });

                        var latstart = 0,
                            lonstart = 0,
                            lastlat = 0,
                            lastlon = 0;

                        $('#map-parent').mousemove(function (e) {

                            globeopt.offsetx = this.offsetLeft;
                            globeopt.offsety = this.offsetTop;
                            $('#status').html(e.pageX + ', ' + e.pageY);

                            if (globeopt.isdragged === true) {

                                // Hide any visible tool tips
                                var tip = document.getElementById('tip');
                                tip.style.visibility = "hidden";
                                var Selection = document.getElementById('Selection');
                                Selection.style.visibility = "hidden";                 

                                lastlat = globeopt.lat0;
                                lastlon = globeopt.lon0;
                                if (globeopt.firstclick === true) {
                                    globeopt.startx = e.pageX - globeopt.offsetx;
                                    globeopt.starty = e.pageY - globeopt.offsety;
                                    latstart = globeopt.lat0;
                                    lonstart = globeopt.lon0;
                                    globeopt.firstclick = false;
                                }
                                var relx = e.pageX - globeopt.offsetx - globeopt.startx;
                                var rely = e.pageY - globeopt.offsety - globeopt.starty;
                                //$('#status').html(relx +', '+ rely);
                                globeopt.deltalon = (-relx / 4);
                                globeopt.deltalat = (rely / 4);
                                globeopt.lon0 = (lonstart + globeopt.deltalon + 540) % 360 - 180;
                                globeopt.lat0 = latstart + globeopt.deltalat;
                                if (globeopt.lat0 > 90) {globeopt.lat0 = 90; }
                                if (globeopt.lat0 < -90) {globeopt.lat0 = -90; }
                                // gui.__controllers[1].updateDisplay();
                                // gui.__controllers[2].updateDisplay();
                                //$('#relxystatus').html(globeopt.deltalat +'Â°'+ globeopt.deltalon + 'Â°');
                                $('#latlonstatus').html((Math.floor(globeopt.lat0)) + 'Â°, ' + (Math.floor(globeopt.lon0)) + 'Â°');
                                if (globeopt.lat0 !== lastlat || globeopt.lon0 !== lastlon) {
                                    renderFrame();
                                }

                            } else {

                            }
                        });

                        $('#dataTable').on('click', 'tbody tr', function(event) {

                            console.log('hello')

                            // Check to see if another row element is already selected. If so, de-select it.
                            if ( (previousRowElement != null) && (!previousRowElement.is($(this))) ) {
                                // previousRowElement.css({ "background-color": "#ffffff" });
                                previousRowElement.css({ "background-color": "#f8f8f8" });
                            }

                            if( $(this).css('background-color') == "rgb(227, 239, 255)") {

                                // Change the color of the selected row back to white and remove the tool tip
                                //$(this).css({ "background-color": "#ffffff" });
                                $(this).css({ "background-color": "#f8f8f8" });
                                previousRowElement = null;

                                var tip = document.getElementById('tip');
                                tip.style.visibility = "hidden";

                                var Selection = document.getElementById('Selection');
                                Selection.style.visibility = "hidden";


                            } else {

                                // Chnage the color of the select row to light blue
                                $(this).css({ "background-color": "#E3EFFF" });
                                previousRowElement = $(this);

                                // Extract the source information
                                sourceName = $(this).find("td").eq(0).html(); 
                                sourceRA = $(this).find("td").eq(2).html(); 
                                sourceDec = $(this).find("td").eq(3).html(); 
                                sourceGlon = $(this).find("td").eq(4).html(); 
                                sourceGlat = $(this).find("td").eq(5).html(); 

                                // Get all the current points on the map
                                points_CanvasProjection, userPoint_CanvasProjection = renderFrame();

                                sourceRA_CanvasProjection = userPoint_CanvasProjection[0];
                                sourceDec_CanvasProjection = userPoint_CanvasProjection[1];

                                console.log(sourceRA_CanvasProjection);
                                console.log(sourceDec_CanvasProjection);

                                var d, i, point;
                                d = 100
                                var distances = new Array();

                                var canvas = document.getElementById("proj");
                                offsetLet = canvas.offsetLeft;
                                offsetTop = canvas.offsetTop;
                               
                                // Find the distance of eaech point from the user selected coordinates and show a tool tip at the closest point
                                for (i=0; i<points_CanvasProjection.length; i++) {

                                    point_CanvasProjection = points_CanvasProjection[i];
                                    point = points[i]
                                    d = Math.sqrt( Math.pow(sourceRA_CanvasProjection - point_CanvasProjection[0], 2) + Math.pow(sourceDec_CanvasProjection - point_CanvasProjection[1], 2) );

                                    if (d < 5) {

                                        var tip = document.getElementById('tip');
                                        tip.style.visibility = "visible";
                                        tip.style.left = point_CanvasProjection[0] + offsetLet - 95 + "px";
                                        tip.style.top = point_CanvasProjection[1] + offsetTop - 105 + "px";

                                        var lightcurveLink = "<a href=\"./data/3FGL_lc_v5/" + point.Source_Name.replace(' ', '_').replace('+','p').replace('.','d').replace('-','m') + "_lc.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Light Curve</a>";
                                        var spectrum = "<a href=\"./data/3FGL_spec_v5/"  + point.Source_Name.replace(' ', '_').replace('.','d').replace('+','p') + "_spec.png\" onclick=\"window.open(this.href,'targetWindow','width=800px, height=600px'); return false;\">Spectrum</a>";

                                        document.getElementById("tip").innerHTML =  point.Source_Name + '<BR>RA: ' + point.RAJ2000 + ', Dec: ' + point.DEJ2000 + '<BR>Association: ' + point.ASSOC1 + '<BR>' + lightcurveLink  + ' | ' + spectrum;


                                        var Selection = document.getElementById('Selection');
                                        Selection.style.visibility = "visible";
                                        Selection.style.left = (point_CanvasProjection[0] + offsetLet - 7) + "px";
                                        Selection.style.top = (point_CanvasProjection[1] + offsetTop - 7) + "px";
                                        

                                    } else {


                                    }

                                }

                            }
                        });

                        $("#mapProjection").change(function(){

                            var userSelectedProjection = $(this).val();
                            var url = location.href.split('#');
                            location.href = url[0] + '#' + userSelectedProjection;
                            globeopt.proj = userSelectedProjection;
                            renderFrame()
                        });

                        // Action to execute when a select form changes state
                        $('#LineSelect').change(function(){  

                            console.log('Clearing table');
                            var NoData = {};
                            FillTable(NoData);

                            // Display the loading statement
                            document.getElementById('LoadingDiv').style.display = 'block';

                            lines = $(this).val();

                            if (lines == 10000) {
                                lines = points.length;

                                // Get the data
                                queryDB('TableData', '&lines=' + lines + '&offset=0');

                                document.getElementById('nextSourcesSpan').style.visibility = "hidden";
                                document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: 0 - ' + lines.toString()
                                document.getElementById('previousSourcesSpan').style.visibility = "hidden";

                            } else {

                                // Get the data
                                queryDB('TableData', '&lines=' + lines + '&offset=' + offset);

                                // Modify the html contents accordingly
                                previousSourcesLink = document.getElementById('previousSources');
                                if (previousSourcesLink == null) {
                                    document.getElementById('previousSourcesSpan').innerHTML = '< Previous ' + lines + ' Sources'
                                } else {
                                    document.getElementById('previousSources').innerHTML = '< Previous ' + lines + ' Sources'
                                }

                                nextSourcesLink = document.getElementById('nextSources');
                                if (nextSourcesLink == null) {
                                    document.getElementById('nextSourcesSpan').innerHTML = 'Next ' + lines + ' Sources >'
                                } else {
                                    document.getElementById('nextSources').innerHTML = 'Next ' + lines + ' Sources >'
                                }


                                if (lines == points.length) {
                                    console.log('Scenario 1')
                                    document.getElementById('nextSourcesSpan').style.visibility = "hidden";
                                    document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: ' + offset + ' - ' + (parseFloat(lines) + parseFloat(offset)).toString()
                                    document.getElementById('previousSourcesSpan').style.visibility = "hidden";

                                } else if (parseFloat(lines) + parseFloat(offset) >= points.length) {
                                    console.log('Scenario 2')
                                    document.getElementById('nextSourcesSpan').style.visibility = "visible";
                                    document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: ' + offset + ' - ' + points.length
                                    document.getElementById('previousSourcesSpan').style.visibility = "visible";

                                } else {
                                    console.log('Scenario 3')
                                    document.getElementById('nextSourcesSpan').style.visibility = "visible";
                                    document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: ' + offset + ' - ' + (parseFloat(lines) + parseFloat(offset)).toString()
                                    document.getElementById('previousSourcesSpan').style.visibility = "visible";
                                }

                            }
                        });

                        // Action to execute when a select form changes state
                        $('#SourceSelect').on('change', 'input[type=checkbox]', function() {

                            // Hide any visible tool tips
                            var tip = document.getElementById('tip');
                            tip.style.visibility = "hidden";
                            var Selection = document.getElementById('Selection');
                            Selection.style.visibility = "hidden";   


                            // console.log('=== '  + $(this).val() + ' ===')
                            // clickedCheckbox = 
                            // id = clickedCheckbox.val();
                            // checked = clickedCheckbox.is(":checked")

                            if ($(this).val() === 'All') {

                                if ($(this).is(":checked") == true) {
                                    var checkboxes = $(this).closest('form').find(':checkbox').not($(this));
                                    checkboxes.prop('checked', false);

                                    // // Reload the table data
                                    // offset = 0;
                                    // queryDB('TableData', '&lines=' + lines + '&offset=' + offset);

                                    // // Reload the map data
                                    // queryDB('MapData');

                                } 

                                // Make sure you can't uncheck "All" if it is the only thing selected 
                                $("#AllCheckbox").prop('checked', true);
                                classSelectURLParameters = '';

                                // Reload the map data
                                queryDB('MapData');

                                offset = 0;
                                queryDB('TableData', '&lines=' + lines + '&offset=' + offset);


                                // Reset the navigation controls
                                document.getElementById('previousSourcesSpan').innerHTML = '< Previous ' + lines + ' Sources'
                                document.getElementById('rangeDisplay').innerHTML = 'Showing Sources: 0 - ' + lines
                                document.getElementById('nextSourcesSpan').innerHTML = '<A id="nextSources" href="#" onclick="reloadTable(\'next\')"> Next ' + lines + ' Sources ></A>';

                            } else {

                                // Uncheck the "All" checkbox when any other checkbox is selected
                                $("#AllCheckbox").prop('checked', false);

                                classSelectURLParameters = '&Class=';

                                $(SourceSelect).find(':checkbox').each(function() {

                                    if ($(this).val() === 'All') {
                                        return false;
                                    }
                                    if ($(this).prop('checked') == true) {

                                        classSelectURLParameters = classSelectURLParameters + "'" + $(this).val() + "'"  + '+';
                                    }
                                });

                                if (classSelectURLParameters === '&Class=') {
                                    classSelectURLParameters = "&Class='Nothing'";
                                }

                                // Reload the map data
                                queryDB('MapData', classSelectURLParameters);

                                // Reload the table data
                                offset = 0;
                                queryDB('TableData', classSelectURLParameters + '&lines=' + lines + '&offset=' + offset);




                            }

                        });
                    });

                    var preElement;
                    var originalBackgroundColor;

                </script>

                <!-- Map container starts here -->
                <div style="width:60%;margin-left:-200px">

                    <!-- Source selection div starts here -->
                    <div style="width:20%; float: left">
                        <div id="SourceSelect" align=left style="width: 100%; margin-top:100px">
                            <b>Source Types:</b><br>
                            <form id="SourceSelect">
                                <input type="checkbox" name="select" value="Pulsar">  Pulsar <br>
                                <input type="checkbox" name="select" value="Pulsar wind nebula">  Pulsar wind nebula <br>
                                <input type="checkbox" name="select" value="Supernova remnant">  Supernova remnant <br>
                                <input type="checkbox" name="select" value="Globular cluster">  Globular cluster <br>
                                <input type="checkbox" name="select" value="High-mass binary">  High-mass binary <br>
                                <input type="checkbox" name="select" value="Binary">  Binary <br>
                                <input type="checkbox" name="select" value="Nova">  Nova <br>
                                <input type="checkbox" name="select" value="Star-forming region">  Star-forming region <br>
                                <input type="checkbox" name="select" value="BL LAC"> BL LAC <br>
                                <input type="checkbox" name="select" value="FSRQ">  FSRQ<br>
                                <input type="checkbox" name="select" value="Radio galaxy">  Radio galaxy<br>
                                <input type="checkbox" name="select" value="Normal galaxy">  Normal galaxy<br>
                                <input type="checkbox" name="select" value="Non-blazar active galaxy">  Non-blazar active galaxy<br>
                                <input type="checkbox" name="select" value="Blazar candidate">  Blazar candidate<br>
                                <input type="checkbox" name="select" value="Narrow line Seyfert 1">  Narrow line Seyfert 1<br>
                                <input type="checkbox" name="select" value='Unassociated'> Unassociated <br>
                                <input id="AllCheckbox" type="checkbox" name="select" checked value="All">  All <br>
                            </form>
                        </div>
                    </div>
                    <!-- Source selection div ends here -->

                    <!-- Map canvas div starts here -->
                    <div style="width:75%; float: left">

                        <!-- Map canvas starts here -->
                        <div id="map-parent">
                            <center>
                            </center>
                        </div>
                        <!-- Map canvas ends here -->

                    </div>
                    <!-- Map canvas div ends here -->

                </div>
                <!-- Map container ends here -->

                <BR>

                <!-- </div> -->

                <!--
                <div style="padding-left:65px">
                    <h2 id="k-proj-title" style="padding-left:65px"></h2>
                    <div class="span5">
                        <div class="k-gui"></div>
                    </div>
                </div>
                -->

                <div id="tip"></div>
                <div id="Selection" width=10 height=10></div>


                <!-- Table container div starts here -->
                <div style="width=50%; margin-top:25px; margin-left:auto; margin-right:auto; padding-left:25px; padding-right:25px; display: inline-block;">


                    <CENTER>

                        <BR>
                        <!-- <button data-toggle="modal" href="#normalModal" type="submit" type="submit" class="orangebutton" title="Setup Notifications" style="font:14px;">Configure Table Columns</button> -->
                        <button data-toggle="modal" href="#ConfigureTableModal" type="submit" class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Configure Table</button>
                        <button data-toggle="modal" href="#RadiusSearchModal" type="submit" class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Radius Search</button>     
                        <button data-toggle="modal" href="#AdvancedSearchModal" type="submit" class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Keyword Search</button>  
                        <!-- <button data-toggle="modal" href="#ExportTableData" type="submit" onclick="ExportTableData()"  class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Export Data</button>  -->
                        <!-- <button data-toggle="modal" href="#ExportMap" type="submit" onclick="ExportMap()"  class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Export Map</button> -->
                        <!-- <button data-toggle="modal" href="#Resize" type="submit" onclick="Resize()"  class="btn btn-primary" style="color:white;font-size: 12px;margin:5px">Resize</button> -->

                        <!-- Export menu button -->
                        <div class="btn-group">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:white;font-size: 12px;margin:5px">Export <span class="caret"></span></button>
                          <ul class="dropdown-menu">
                            <li><a href="#ExportTableData">Export Data</a></li>
                            <li><a href="#ExportMap">Export Map Image</a></li>
                          </ul>
                        </div>

                        <span id="ClearSearchButtonSpan" style="display:none"><button data-toggle="modal" id="ClearSearchButton" type="submit" onclick="clearSearch()" class="btn btn-danger" style="color:white;font-size: 12px;margin:5px">Clear Search</button></span>


                    </CENTER>


                    <!-- Data table starts here -->
                    <div id="LoadingDiv" style="width:800px; display:none">Loading...<BR></div>
                    <div id="dataTableDiv">
                        <table id="dataTable" class="styled-table" style="margin-top:25px">
                        </table>
                    </div>
                    <!-- Data table ends here -->

                    <BR>

                    <!-- Navigation controls start here -->
                    <span id='previousSourcesSpan' style="float:left">< Previous 100 Sources</span> 
                    <span id='rangeDisplay'> Showing Sources: 0 - 100 </span> 
                    <span id='nextSourcesSpan' style="float:right"><A id='nextSources' href="#" onclick="reloadTable('next')"> Next 100 Sources ></A></span>
                    <!-- Navigation controls end here -->


                </div>
                <!-- Table container div ends here -->

                <BR>
                <div>




                </div>

                <BR>
                <BR>
                <BR>
                <BR>
                <BR>






            </center>

        </div>






        <div class="footer">
        <!-- &copy; Copyright 2012-2014. Created by <a href="http://driven-by-data.net">Gregor Aisch</a>. -->
        </div>

        <!-- Modal view starts here -->
        <div id="ConfigureTableModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 class="modal-title" style="font-size: 18px; font-weight: normal; color: #333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Table Configuration</h4>
                    </div>

                    <div class="modal-body"  style="font-size: 14px; font-weight: normal; color: #333; line-height: 1.42857143; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <!-- <iframe frameborder="0" scrolling="no" width="700" height="700" src="http://google.about.com/b/2013/04/01/google-nose.htm"></iframe>-->

                        <style>
                            table.notifications th, table.notifications td {font-size: 14px !important;font: normal 1em 'Helvetica Neue', Helvetica, Arial, sans-serif; padding-bottom: 4px}
                        </style>

                        <form id="TableConfiguration" name='TableConfiguration'>
                            <div style="width: 100%; overflow: hidden;">
                                <div id="ColumnSelect" name="ColumnSelect" style="width: 300px; float: left; margin-left:10px"> 

                                    <b>Available Catalog Data:</b><br>
                                    <input type="checkbox" name="select" checked value="1" onclick="toggleColumn(this)">  Source name<br>
                                    <input type="checkbox" name="select" checked value="2" onclick="toggleColumn(this)">  Association<br>
                                    <input type="checkbox" name="select" checked value="3" onclick="toggleColumn(this)">  RA (J2000.0)<br>
                                    <input type="checkbox" name="select" checked value="4" onclick="toggleColumn(this)">  Dec (J2000.0)<br>
                                    <input type="checkbox" name="select" checked value="5" onclick="toggleColumn(this)">  Galactic l <br>
                                    <input type="checkbox" name="select" checked value="6" onclick="toggleColumn(this)">  Galactic b <br>
                                    <input type="checkbox" name="select" value="7" onclick="toggleColumn(this)">  Average significance <br>
                                    <input type="checkbox" name="select" value="8" onclick="toggleColumn(this)">  Flux Density (1-100 GeV ph/cm<sup>2</sup>/s)<br>
                                    <input type="checkbox" name="select" checked value="10" onclick="toggleColumn(this)">  Flux (1-100 GeV ph/cm<sup>2</sup>/s)<br>

                                </div>

                                <div style="margin-left: 350px;">
                                    <br>
                                    <input type="checkbox" name="select" value="12" onclick="toggleColumn(this)">  Spectral type <br>
                                    <input type="checkbox" name="select" checked value="13" onclick="toggleColumn(this)">  Spectral index <br>
                                    <input type="checkbox" name="select" value="15" onclick="toggleColumn(this)">  Variability index<br>
                                    <input type="checkbox" name="select" value="16" onclick="toggleColumn(this)"> Classification (code)<br>
                                    <input type="checkbox" name="select" checked value="21" onclick="toggleColumn(this)"> Classification (human)<br>
                                    <input type="checkbox" name="select" value="17" onclick="toggleColumn(this)">  TeV CAT<br>
                                    <input type="checkbox" name="select" value="18" onclick="toggleColumn(this)">  TeV Association<br>
                                    <input type="checkbox" name="select" value="19" onclick="toggleColumn(this)">  Flags<br>
                                    <input type="checkbox" name="select" value="20" onclick="toggleColumn(this)" style="display:none">
                                </div>

                                <BR>
                                <BR>
                                <div id="LineSelectDiv"style="width: 300px; float: left; margin-left:10px"> 
                                    <b>Number of lines/page:</b><br>
                                    <div class="input-group input-group-sm">
                                        <select id="LineSelect" name="LineSelect">
                                            <option value="10">10</option>
                                            <option value="100" selected>100</option>
                                            <option value="500">500</option> 
                                            <option value="1000">1000</option> 
                                            <option value="10000">No Limit</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="MapProjectionDiv" style="margin-left: 350px;">
                                    <b>Map Projection:</b><br>
                                    <div class="input-group input-group-sm">
                                        <select id="mapProjection" name="mapProjection">
                                            <option value="aitoff" selected>aitoff</option>
                                            <option value="mollweide">mollweide</option>
                                            <option value="ortho">ortho</option> 
                                            <option value="stereo">stereo</option> 
                                            <option value="satellite">satellite</option>
                                            <option value="laea">laea</option>
                                            <option value="mercator">mercator</option>
                                            <option value="gallpeters">gallpeters</option>
                                        </select>
                                    </div>
                                </div>

                        </form>


                                <BR>

                            </div>
                        </form>

                    </div>

                    <div class="modal-footer">
                        <div style="float: right; margin-right: 4px;"> 
                            <button type="button" class="btn btn-default" data-dismiss="modal" style="color:black;font-size: 12px;margin-top:10px">Close</button>
                        </div>           
                    </div>

                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <!-- Modal view ends here -->



        <!-- Modal view starts here -->
        <div id="AdvancedSearchModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title" style="font-size: 18px; font-weight: normal; color: #333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Keyword Search</h4>
                </div>

                <div class="modal-body" style="font-size: 14px; font-weight: normal; color: #333; line-height: 1.42857143;">
                  <!-- <iframe frameborder="0" scrolling="no" width="700" height="700" src="http://google.about.com/b/2013/04/01/google-nose.htm"></iframe>-->

                    <style>
                        table.notifications th, table.notifications td {font-size: 14px !important;font: normal 1em 'Helvetica Neue', Helvetica, Arial, sans-serif; padding-bottom: 4px}
                    </style>

                    <form>

                        <div style="width: 100%; overflow: hidden;">
                            <div id="SearchDiv"style="width: 250px; float: left; margin-left:10px"> 
                                <b>Search Parameters:</b><br>
                                    <BR>
                                    <div class="controls form-inline">
                                         &nbsp&nbspName:&nbsp&nbsp&nbsp&nbsp<input id="KeywordSearchInput" type="text" class="input-small" placeholder="3FGL J0038.0-2501">
                                    </div>


<!--                                 <table style="border-collapse: separate; border-spacing: 10px;" >
                                    <tr>
                                        <td>
                                            Name:&nbsp&nbsp
                                        </td>
                                        <td>
                                            <div class="controls form-inline">
                                                <input id="KeywordSearchInput" type="text" class="input-small" placeholder="3FGL J0038.0-2501">
                                            </div>
                                        </td>
                                    </tr>
                                </table> -->

                            </div>

                            <div style="margin-left: 300px;">
                                <B>Help:</B>
                                <BR><p>
                                This field will search the LAT catalog name as well as all known named associations
                            </div>
                        </div>

                        <BR>
                        <BR>
                        <BR>


    <!-- 
                             <div style="width: 100%; overflow: hidden;">
                                <div id="ColumnSelect"style="width: 800px; float: left; margin-left:10px"> 

                                    <b>Search Parameters:</b><br>
                                    <table style="border-collapse: separate; border-spacing: 10px;" >
                                        <tr>
                                            <td width="100px">
                                                Source Name
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input id="KeywordSearchInput" type="text" class="input-small" placeholder="3FGL J0047.5-2516">
                                                </div>
                                            </td>
                                        </tr>
       
                                       <tr>
                                            <td>
                                                Association
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="NGC 253" id="inputKey">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                RA
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Dec
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Galactic l 
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Galactic b
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Average significance
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Flux Density
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Flux
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Spectral type
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="PowerLaw" id="inputKey">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Spectral index 
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Variability index
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="min" id="inputKey">
                                                    and
                                                    <input type="password" class="input-small" placeholder="max" id="inputValue">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Optical classification
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="sbg" id="inputKey">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                TeV CAT
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="P" id="inputKey">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                TeV Association
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="NGC 253" id="inputKey">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Flags
                                            </td>
                                            <td>
                                                <div class="controls form-inline">
                                                    <input type="text" class="input-small" placeholder="0" id="inputKey">
                                                </div>
                                            </td>
                                        </tr> 



                                    </table>
                                </div>
                            </div>

                        -->
                    </form>

                </div>

                <div class="modal-footer">
                    <div id="keywordSearchButtonDiv" style="width: 110px; float: right;">
                        <button form="PreferenceForm" type="button" onclick="CombinedSearch()" data-dismiss="modal" name="keywordSearchButton" value="True" class="btn btn-primary" style="color:white;font-size: 12px;margin-top:10px">Update Table</button>
                    </div>  
                    <div style="float: right; margin-right: 4px;"> 
                        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="closeNotificationsModal()" style="color:black;font-size: 12px;margin-top:10px">Close</button>
                    </div>           
                  </div>
                </div>

                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <!-- Modal view ends here -->

        <!-- Modal view starts here -->
        <div id="RadiusSearchModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title" style="font-size: 18px; font-weight: normal; color: #333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Radius Search</h4>
                </div>

                <div class="modal-body"  style="font-size: 14px; font-weight: normal; color: #333; line-height: 1.42857143;">
                  <!-- <iframe frameborder="0" scrolling="no" width="700" height="700" src="http://google.about.com/b/2013/04/01/google-nose.htm"></iframe>-->

                    <style>
                        table.notifications th, table.notifications td {font-size: 14px !important;font: normal 1em 'Helvetica Neue', Helvetica, Arial, sans-serif; padding-bottom: 4px}
                    </style>

                    <form>

    <!--
                         <div style="width: 100%; overflow: hidden;">
                            <div id="ColumnSelect"style="width: 250px; float: left; margin-left:10px"> 
                                <b>Named Search:</b><br>
                                <table style="border-collapse: separate; border-spacing: 10px;" >
                                    <tr>
                                        <td>
                                            Name:&nbsp&nbsp
                                        </td>
                                        <td>
                                            <div class="controls form-inline">
                                                <input id="KeywordSearchInput" type="text" class="input-small" placeholder="3FGL J0038.0-2501">
                                            </div>
                                        </td>
                                    </tr>

                                </table>
                            </div>

                            <div style="margin-left: 300px;">
                                <B>Help:</B>
                                <BR>
                                This field will search the LAT catalog name as well as all known named associations
                            </div>
                        </div>

                        <BR> 
    -->

                        <div style="width: 100%; overflow: hidden;">

                            <div id="RadiusSearchDiv" style="width: 300px; float: left; margin-left:10px"> 

                                <b>Search Parameters:</b><br>
                                <BR>

                                <div style="width: 75px; float: left; margin-left:10px; line-height: 2.4;">
                                    RA:
                                    <BR>
                                    Dec:
                                    <BR>
                                    Radius:
                                </div>
                                <div style="margin-left: 75px;">
                                    <input id="raInput" type="text" class="input-small" placeholder="275.50" id="inputKey" style="margin-bottom: 10px;">
                                    <BR>
                                    <input id="decInput" type="text" class="input-small" placeholder="-45.50" id="inputKey" style="margin-bottom: 10px;">
                                    <BR>
                                    <input id="radiusInput" type="text" class="input-small" placeholder="12.0" id="inputKey" style="margin-bottom: 10px;">
                                </div>
                                <BR>

<!--                                 <b>Search Parameters:</b><br>
                                    <BR>
                                    &nbsp&nbspRA:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="raInput" type="text" class="input-small" placeholder="275.50" id="inputKey">
                                    <BR><p>
                                    &nbsp&nbspDec:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="decInput" type="text" class="input-small" placeholder="-45.50" id="inputKey">
                                    <BR><p>
                                    &nbsp&nbspRadius:&nbsp&nbsp<input id="radiusInput" type="text" class="input-small" placeholder="12.0" id="inputKey"> -->

<!--                                 <table style="border-collapse: separate; border-spacing: 10px;" >
                                    <tr>
                                        <td>
                                            RA:
                                        </td>
                                        <td>
                                            <div class="controls form-inline">
                                                <input id="raInput" type="text" class="input-small" placeholder="275.50" id="inputKey">
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Dec:
                                        </td>
                                        <td>
                                            <div class="controls form-inline">
                                                <input id="decInput" type="text" class="input-small" placeholder="-45.50" id="inputKey">
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Radius:
                                        </td>
                                        <td>
                                            <div class="controls form-inline">
                                                <input id="radiusInput" type="text" class="input-small" placeholder="12.0" id="inputKey">
                                            </div>
                                        </td>
                                    </tr>
                                </table> -->

                            </div>


                            <div style="margin-left: 300px;">
                                <B>Help:</B>
                                <BR><p>
                                Coordinates are expected in decimal degrees.

             

                            </div>
                        </div>

                    </form>

                </div>

                <div class="modal-footer">
                    <div id="radiusSearchButtonDiv" style="width: 110px; float: right;">
                        <button form="PreferenceForm" type="button" onclick="CombinedSearch()" data-dismiss="modal" name="radiusSearchButton" value="True" class="btn btn-primary" style="color:white;font-size: 12px;margin-top:10px">Update Table</button>
                    </div>   
                    <div style="float: right; margin-right: 4px;"> 
                        <button type="button" class="btn btn-default" data-dismiss="modal" style="color:black;font-size: 12px;margin-top:10px">Close</button>
                    </div>           
                  </div>
                </div>

                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <!-- Modal view ends here -->



</body>
</html>


