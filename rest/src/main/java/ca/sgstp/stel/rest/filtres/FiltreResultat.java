package ca.sgstp.stel.rest.filtres;

import ca.sgstp.stel.apis.commun.resultat.ResultatAction;
import ca.sgstp.stel.apis.commun.resultat.ResultatCreation;
import ca.sgstp.stel.apis.commun.resultat.ResultatModification;
import ca.sgstp.stel.apis.commun.resultat.ResultatObtention;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Objects;

public class FiltreResultat implements ContainerResponseFilter {
    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {

        if (containerResponseContext.getEntity() instanceof ResultatObtention) {
            ResultatObtention resultat = (ResultatObtention) containerResponseContext.getEntity();
            if (Objects.isNull(resultat.ressource)) {
                containerResponseContext.setStatusInfo(Response.Status.NOT_FOUND);
            }
        }

        if (containerResponseContext.getEntity() instanceof ResultatCreation) {
            ResultatCreation resultat = (ResultatCreation) containerResponseContext.getEntity();
            if (Objects.isNull(resultat.ressource)) {
                containerResponseContext.setStatusInfo(Response.Status.CONFLICT);
            }
        }

        if (containerResponseContext.getEntity() instanceof ResultatModification) {
            ResultatModification resultat = (ResultatModification) containerResponseContext.getEntity();
            if (Objects.isNull(resultat.ressource)) {
                containerResponseContext.setStatusInfo(Response.Status.CONFLICT);
            }
        }

        if (containerResponseContext.getEntity() instanceof ResultatAction) {
            ResultatAction resultat = (ResultatAction) containerResponseContext.getEntity();
            if (Objects.isNull(resultat.succes) || !resultat.succes) {
                containerResponseContext.setEntity(resultat.toBuilder().succes(Boolean.FALSE).build());
                containerResponseContext.setStatusInfo(Response.Status.CONFLICT);
            }
        }
    }
}
