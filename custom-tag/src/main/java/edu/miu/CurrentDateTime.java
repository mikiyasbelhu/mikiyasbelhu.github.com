package edu.miu;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrentDateTime extends SimpleTagSupport {

    String color;
    String size;

    //render custom tag
    public void doTag() throws JspException, IOException {

        JspWriter out = getJspContext().getOut();
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        if (color != null && size != null) {
            out.write(String.format("<span style='color:%s; font-size:%s'>%s</span>", color, size, ft.format(dNow)));
        } else if (color != null) {
            out.write(String.format("<span style='color:%s'>%s</span>", color, ft.format(dNow)));
        } else if (color != null && size != null) {
            out.write(String.format("<span style='font-size:%s'>%s</span>", size, ft.format(dNow)));
        } else {
            out.write(String.format("<span>%s</span>", ft.format(dNow)));
        }
    }

    //Need a setter for each attribute of custom tag
    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}