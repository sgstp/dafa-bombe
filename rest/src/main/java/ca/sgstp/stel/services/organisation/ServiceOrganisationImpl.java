package ca.sgstp.stel.services.organisation;

import ca.sgstp.stel.apis.commun.resultat.ResultatObtention;
import ca.sgstp.stel.apis.organisation.Organisation;
import ca.sgstp.stel.apis.organisation.ServiceOrganisation;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
public class ServiceOrganisationImpl implements ServiceOrganisation {

    @Override
    @Transactional
    public ResultatObtention<Organisation> obtenirOrganisation() {
        return ResultatObtention.<Organisation>builder().ressource(Organisation.builder().build()).build();
    }
}
