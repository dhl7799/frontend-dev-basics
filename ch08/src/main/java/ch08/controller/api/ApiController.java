package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/json")
	public GuestbookVo json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1l);
		vo.setName("둘리");
		vo.setMessage("호이~");
		return vo;
	}
}
