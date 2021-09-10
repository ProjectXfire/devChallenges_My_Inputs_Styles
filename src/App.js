import { Container, Block, Box, BlockWithouFlex } from "./styles/container";
import { Input } from "./components/input";

function App() {
  return (
    <Container>
      <h2>Inputs Styles</h2>
      <h3>Default Input - Hover & Focus</h3>
      <Block>
        <Box>
          <p>{`<Input label="Put your label here" placeholder="Placeholder"/>`}</p>
          <Input label="Put your label here" placeholder="Placeholder" />
        </Box>
      </Block>
      <h3>Error Input - Hover & Focus</h3>
      <Block>
        <Box>
          <p>{`<Input error/>`}</p>
          <Input label="Put your label here" placeholder="Placeholder" error />
        </Box>
      </Block>
      <h3>Helper Text - Hover & Focus</h3>
      <Block>
        <Box>
          <p>{`<Input helperText="Put something here" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            helperText="Put something here"
          />
        </Box>
        <Box>
          <p>{`<Input error helperText="Put something here" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            error
            helperText="Put something here"
          />
        </Box>
      </Block>
      <h3>Disabled Input</h3>
      <Block>
        <Box>
          <p>{`<Input disabled />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            disabled
          />
        </Box>
      </Block>
      <h3>Input value</h3>
      <Block>
        <Box>
          <p>{`<Input disabled defaultValue="Your value here" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            defaultValue="Your value here"
          />
        </Box>
      </Block>
      <h3>Input Sizes</h3>
      <Block>
        <Box>
          <p>{`<Input size="sm" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            size="sm"
          />
        </Box>
        <Box>
          <p>{`<Input size="md" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            size="md"
          />
        </Box>
        <Box>
          <p>{`<Input size="lg" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            size="lg"
          />
        </Box>
      </Block>
      <h3>Input Full Size </h3>
      <BlockWithouFlex>
        <Box>
          <p>{`<Input fullWidth />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            fullWidth
          />
        </Box>
      </BlockWithouFlex>
      <h3>Input Icons</h3>
      <Block>
        <Box>
          <p>{`<Input startIcon="AiOutlinePhone" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            startIcon="AiOutlinePhone"
          />
        </Box>
        <Box>
          <p>{`<Input endIcon="AiFillLock" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            endIcon="AiFillLock"
          />
        </Box>
        <Box>
          <p>{`<Input colorIcon="blue"" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            startIcon="AiOutlinePhone"
            colorIcon="blue"
          />
        </Box>
        <Box>
          <p>{`<Input colorIcon="red" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            endIcon="AiFillLock"
            colorIcon="red"
          />
        </Box>
      </Block>
      <h3>Input Icons Sizes</h3>
      <Block>
        <Box>
          <p>{`<Input sizeIcon="10" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            startIcon="AiOutlinePhone"
            sizeIcon="10"
          />
        </Box>
        <Box>
          <p>{`<Input sizeIcon="30" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            endIcon="AiFillLock"
            sizeIcon="30"
          />
        </Box>
      </Block>
      <h3>Input Text Area</h3>
      <Block>
        <Box>
          <p>{`<Input multiline rows="5" />`}</p>
          <Input
            label="Put your label here"
            placeholder="Placeholder"
            multiline
            rows="5"
          />
        </Box>
      </Block>
      <Block>
        <span>Icons: https://react-icons.github.io/react-icons</span>
      </Block>
      <Block>
        <footer>
          created by <strong>gbdeveloper</strong> - devChallenges.io
        </footer>
      </Block>
    </Container>
  );
}

export default App;
