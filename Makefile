CONTEXT =	./
CLSDIR  =	$(CONTEXT)/WEB-INF/classes
CLASSES =	OktaServlet.class

all:	$(CLASSES)

clean:
	/bin/rm -f $(CLASSES) */*.class

install: 
	$(CLASSES)
	jar -cvf cms_demo.war * \ 
	mv cms_demo.war /usr/share/tomcat8/webapps \
	rm -rf /usr/share/tomcat8/webapps/cms_demo \
	service tomcat8 restart

OktaServlet.class:   
	OktaServlet.java \
        javac OktaServlet.java
