
cxf:
	node app.js -d test_op -o cxf -f ../modelica-buildings/Buildings/Controls/OBC/ASHRAE/G36/VentilationZones/Title24/Setpoints.mo

deps:
	find test_op/ -name '*.jsonld' | xargs grep -h type | sort | uniq | cut -f2 -d'#' | grep Buildings | tr -d \",

all:
	TRANSLATE="node ../modelica-json/app.js -d test_op -o cxf --elementary -f"; \
	for f in `find ../modelica-buildings/Buildings/Controls/OBC/ASHRAE/G36/ -name '*.mo'`; do \
		echo $$f; \
		$$TRANSLATE $$f || echo $$f >> failures.log; \
	done
