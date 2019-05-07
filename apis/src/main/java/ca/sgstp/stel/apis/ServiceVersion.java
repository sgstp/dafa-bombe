package ca.sgstp.stel.apis;

import ca.sgstp.stel.apis.commun.resultat.ResultatObtention;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path(ServiceVersion.PATH_SERVICE)
public interface ServiceVersion {

    String PATH_SERVICE = "version";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    ResultatObtention<? extends InformationCompilation> obtenirVersion();

    interface InformationCompilation {}
}
