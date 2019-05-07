package ca.sgstp.stel.services.commun;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface BombeRepository<T, I> extends PagingAndSortingRepository<T, I> {
}
