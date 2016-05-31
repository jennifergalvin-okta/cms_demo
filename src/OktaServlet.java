import java.io.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import javax.servlet.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;
 
public class OktaServlet extends HttpServlet 
{
   public void doGet(HttpServletRequest request, HttpServletResponse response)
               throws IOException, ServletException 
   {

      // This file's purpose is just to read the contents of OktaServlet.html and spit it out
       	String filePath = getServletContext().getRealPath("/WEB-INF/html/OktaServlet.html");

	String docType = "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
	String docContents = new String("");

	try (BufferedReader reader = new BufferedReader(new FileReader(filePath)))
        {
    		String line = null;
    		while ((line = reader.readLine()) != null) 
			{ docContents = docContents + line + "\n"; } 
	}
	catch (IOException x) 
    		{ System.err.format("IOException: %s%n", x); }

      // Set the response message's MIME type
      response.setContentType("text/html;charset=UTF-8");
      // Allocate a output writer to write the response message into the network socket
      PrintWriter out = response.getWriter();
 
      // Write the response message, in an HTML page
      try {
	out.println(docType);
	out.println(docContents);

      } finally {
         out.close();  // Always close the output writer
      }
   }



  // Method to handle POST method request.
  public void doPost(HttpServletRequest request,
                     HttpServletResponse response)
      throws ServletException, IOException {
     doGet(request, response);
  }

}
