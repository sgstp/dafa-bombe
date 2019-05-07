package ca.sgstp.stel.apis.organisation;

import ca.sgstp.stel.apis.commun.resultat.ResultatObtention;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path(ServiceOrganisation.PATH_SERVICE)
public interface ServiceOrganisation {

    String PATH_SERVICE = "organisations";

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    ResultatObtention<Organisation> obtenirOrganisation();
}
