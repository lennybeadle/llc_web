import * as S from './styles';
export function AboutParagraph() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <S.SectionTitle id="case-studies-title">Quality</S.SectionTitle>
          <S.Description>
            Explore how we've helped businesses transform and thrive with
            innovative technology and tailored solutions. Our case studies
            showcase real-world impact and measurable results
          </S.Description>
        </S.Section>
        <S.Section>
          <S.SectionTitle id="case-studies-title">Skills</S.SectionTitle>
          <S.Description>
            Our team of experts brings a diverse set of skills, combining
            technical know-how and creative problem-solving to achieve impactful
            results.
          </S.Description>
        </S.Section>
        <S.Section>
          <S.SectionTitle id="case-studies-title">Passion</S.SectionTitle>
          <S.Description>
            We are driven by a genuine passion for technology and innovation,
            striving to create meaningful solutions that empower our clients/
          </S.Description>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}

export default AboutParagraph;
