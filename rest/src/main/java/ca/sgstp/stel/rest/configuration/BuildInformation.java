package ca.sgstp.stel.rest.configuration;

import ca.sgstp.stel.apis.ServiceVersion;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@PropertySource("classpath:git.properties")
@Component
@Getter
public class BuildInformation implements ServiceVersion.InformationCompilation {
    @Value("${git.branch}")
    private String branch;
//    @Value("${git.build.host}")
//    private String buildHost;
    @Value("${git.build.time}")
    private String buildTime;
//    @Value("${git.build.user.email}")
//    private String buildUserEmail;
    @Value("${git.build.user.name}")
    private String buildUserName;
    @Value("${git.build.version}")
    private String buildVersion;
//    @Value("${git.closest.tag.commit.count}")
//    private String closestTagCommitCount;
//    @Value("${git.closest.tag.name}")
//    private String closestTagName;
    @Value("${git.commit.id}")
    private String commitId;
    @Value("${git.commit.id.abbrev}")
    private String commitIdAbbrev;
//    @Value("${git.commit.id.describe}")
//    private String commitIdDescribe;
//    @Value("${git.commit.id.describe-short}")
//    private String commitIdDescribeShort;
//    @Value("${git.commit.message.full}")
//    private String commitMessageFull;
//    @Value("${git.commit.message.short}")
//    private String commitMessageShort;
//    @Value("${git.commit.time}")
//    private String commitTime;
//    @Value("${git.commit.user.email}")
//    private String commitUserEmail;
//    @Value("${git.commit.user.name}")
//    private String commitUserName;
    @Value("${git.dirty}")
    private String dirty;
//    @Value("${git.remote.origin.url}")
//    private String remoteOriginUrl;
    @Value("${git.tags}")
    private String tags;
//    @Value("${git.total.commit.count}")
//    private String totalCommitCount;
}