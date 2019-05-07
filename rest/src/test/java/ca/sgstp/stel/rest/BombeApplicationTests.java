package ca.sgstp.stel.rest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
//@ContextConfiguration(classes = {ConfigSpring.class})
public class BombeApplicationTests {

//	@Autowired
//	DaoConfigVente daoConfigVente;
//
	@Test
	public void contextLoads() {
	}
//
//	@Test
//	public void addModeEnvoie(){
//		ConfigVente config = daoConfigVente.findById(2).orElse(null);
//		config.setModeEnvoies(Arrays.asList(ModeEnvoie.COURRIEL, ModeEnvoie.IMPRESSION));
//		daoConfigVente.save(config);
//	}

}
