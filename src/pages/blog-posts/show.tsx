import { Stack,Typography } from "@mui/material";
import {
  IResourceComponentsProps,
  useOne,
  useShow,
  useTranslate,
} from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
      resource: "categories",
      id: record?.category?.id || "",
      queryOptions: {
          enabled: !!record,
      },
  });

  return (
      <Show isLoading={isLoading}>
          <Stack gap={1}>
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.id")}
              </Typography>
              <NumberField value={record?.id ?? ""} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.title")}
              </Typography>
              <TextField value={record?.title} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.content")}
              </Typography>
              <MarkdownField value={record?.content} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.category")}
              </Typography>

              {categoryIsLoading ? (
                  <>Loading...</>
              ) : (
                  <>{categoryData?.data?.title}</>
              )}
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.status")}
              </Typography>
              <TextField value={record?.status} />
              <Typography variant="body1" fontWeight="bold">
                  {translate("blog_posts.fields.createdAt")}
              </Typography>
              <DateField value={record?.createdAt} />
          </Stack>
      </Show>
  );
};