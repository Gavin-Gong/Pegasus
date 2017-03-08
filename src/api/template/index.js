import Mock from 'mockjs';
import result from './result';
import articleTpl from './article';

Mock.setup({
  timeout: 10,
});

export default function () {
  // article
  Mock.mock(/articles\/\d+$/, 'get', articleTpl);
  Mock.mock(/articles\/\d+$/, 'post', articleTpl);
  Mock.mock('/articles', 'get', {
    total: 10086,
    page: 10,
    'list|10': [articleTpl],
  });

  // all delete & pacth operation will return result schema!
  Mock.mock(/[\s\S]/, 'delete', result);
  Mock.mock(/[\s\S]/, 'patch', result);
}

// regexp
// path/:id -> /^path\/\d+$/
// path/:id/path -> /^path\/\d+\/path$/
