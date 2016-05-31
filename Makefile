CONTEXT =	./
CLSDIR  =	$(CONTEXT)/WEB-INF/classes
CLASSES =	OktaServlet.class

all:	$(CLASSES)

clean:
	/bin/rm -f $(CLASSES) */*.class

install: 
	$(CLASSES)
	jar -cvf cms_demo.war *

OktaServlet.class:   
	OktaServlet.java
        javac OktaServlet.java
