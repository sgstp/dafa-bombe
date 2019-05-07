package ca.sgstp.stel.services;

import ca.sgstp.stel.apis.ServiceVersion;
import ca.sgstp.stel.apis.commun.resultat.ResultatObtention;
import ca.sgstp.stel.rest.configuration.BuildInformation;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class ServiceVersionImpl implements ServiceVersion {

    private final BuildInformation info;

    @Override
    public ResultatObtention<? extends ServiceVersion.InformationCompilation> obtenirVersion() {
        return ResultatObtention.<BuildInformation>builder().ressource(info).build();
    }
}
