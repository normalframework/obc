
cxf:
	node app.js -d test_op -o cxf -f ../modelica-buildings/Buildings/Controls/OBC/ASHRAE/G36/VentilationZones/Title24/Setpoints.mo

deps:
	find test_op/ -name '*.jsonld' | xargs grep -h type | sort | uniq | cut -f2 -d'#' | grep Buildings | tr -d \",
