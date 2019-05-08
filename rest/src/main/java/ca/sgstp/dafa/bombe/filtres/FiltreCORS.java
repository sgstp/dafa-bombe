package ca.sgstp.dafa.bombe.filtres;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;

public class FiltreCORS implements ContainerResponseFilter {

    @Override
    public void filter(final ContainerRequestContext req,
                       final ContainerResponseContext res) {
        res.getHeaders().add("Access-Control-Allow-Origin", "*");
        res.getHeaders().add("Access-Control-Allow-Headers", "*");
        res.getHeaders().add("Access-Control-Allow-Credentials", "true");
        res.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        res.getHeaders().add("Access-Control-Max-Age", "1209600");
    }

}