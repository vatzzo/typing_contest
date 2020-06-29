package zti.typing_contest.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zti.typing_contest.model.Word;

@Repository("jpa")
public interface WordRepository extends CrudRepository<Word, Integer> { }
